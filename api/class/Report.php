<?php

class Report
{
    private $db;
    public function __construct($link)
    {
        $this->db = $link;
    }

    // 建立navbar
    public static function GenerateMenuArray($arr, $parent = 0)
    {
        // 主目錄
        $sql = "select menu_id, menu_id, order, url, parent_id from allan.elife_report_menus where parent_id = '' order by show_order";
        
    }

    //取得溫度
    public function getTemp($date)
    {
        $sql = "select temp02,temp03,temp04,temp07,temp08 from test.temperaturetbl where tempdate='$date'";
        $query = $this->db->fn_bind($sql);
        return $query->fetch(PDO::FETCH_NUM);
    }

    //取得高低溫
    public function getExtremeTemp($date)
    {
        $sql = "select round(high02, 1), round(low02, 1), round(high03, 1), round(low03, 1), round(high04, 1), round(low04, 1), round(high07, 1), round(low07, 1), round(high08, 1), round(low08, 1) from test.temperature_highlowtbl where tempdate='$date'";
        $query = $this->db->fn_bind($sql);
        return $query->fetch(PDO::FETCH_NUM);
    }
}
