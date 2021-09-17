<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once dirname(__DIR__, 2). '/database/db_conn.php';

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

$source_json = file_get_contents("config/soruce.json");
$sources =json_decode($source_json, true);
$key_words = $sources['key_words'];

$client = new Client();

foreach ($sources['sources'] as $source => $rss) {

    // check exist link
    $chk_dup_sql = "select news_link from business_intelligence.news_feed where news_source = '$source'";
    $chk_dup_query = $link_pdo7->fn_bind($chk_dup_sql);
    $chk_dup_array = $chk_dup_query->fetchAll(PDO::FETCH_ASSOC);

    $exist_news_links = array();
    if (! empty($chk_dup_array)) {
        foreach ($chk_dup_array as $row) {
            $exist_news_links[] = $row['news_link'];
        }
    }

    $response = $client->request('GET', $rss['url']);
    $latestNewsString = (string)$response->getBody();

    $titles = [];
    $descriptions = [];
    $pubDates = [];
    $links = [];
    $images = [];

    $crawler = new Crawler($latestNewsString);

    $crawler
    ->filter('title')
    ->reduce(function (Crawler $node, $i) {
        global $titles;
        $titles[] = $node->text();
    });

    $crawler
    ->filter('description')
    ->reduce(function (Crawler $node, $i) {
        global $descriptions;
        global $images;
        $descriptions[] = str_replace([" ", "\n", "\r", "\t"], "", strip_tags($node->text()));
        // get image_url
        /*
        $image_url = str_replace([" ", "\n", "\r", "\t"], "", strip_tags($node->text(), '<img>'));
        $spliter = explode("src='", $image_url);
        if (count($spliter) == 1) {
            $images[] = "";
        } else {
            array_shift($spliter);
            $img_spliter = explode("'>", $spliter[0]);
            array_pop($img_spliter);
            $images[] = $img_spliter[0];
        }
        */
    });

    $crawler
    ->filter('pubDate')
    ->reduce(function (Crawler $node, $i) {
        global $pubDates;
        $pubDates[] = date("Y-m-d H:i:s", strtotime($node->text()));
    });

    $crawler
    ->filter('link')
    ->reduce(function (Crawler $node, $i) {
        global $links;
        $links[] = $node->text();
    });
    foreach ($titles as $key => $title) {

        // check data exist 
        if($title == "") {
            continue;
        }

        // check start column
        if ($rss['start_column'] > $key) {
            continue;
        }
        
        // check key words
        if (!strposArray($title, $key_words)) {
            continue;
        }

        // check exist
        if (!in_array($links[$key], $exist_news_links)) {
            $data_array = array(
            ':title'=> $title,
            ':description' => $descriptions[$key],
            ':pubDate' => $pubDates[$key],
            ':link' => $links[$key],
            ':source' => $source
        );

            $insert_news_sql = "insert into business_intelligence.news_feed set news_title=:title, news_link=:link, news_content=:description, image_link=:image, news_source=:source, published_at=:pubDate, crawled_at = now()";
            $link_pdo7->fn_bind($insert_news_sql, $data_array);
        }
    }
}
