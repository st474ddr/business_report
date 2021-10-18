<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 h-100">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="text-muted mb-0 card-title">平均銷售額</h5>
                <span class="h2 font-weight-bold mb-0">50,897</span>
              </div>
              <div class="col-auto col">
                <div>
                  <button class="btn btn-transparent-primary btn-lg btn-circle">
                    <i class="material-icons">monetization_on</i>
                  </button>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-nowrap">本月</span>
              <span class="text-success float-right ml-2">
                <i class="material-icons">north</i> 8%</span
              >
            </p>
            <apexcharts
              type="area"
              height="130px"
              v-if="chartSparkData"
              :options="chartSparkOptions"
              :series="chartSparkData"
            ></apexcharts>
            <div v-else class="text-center">
              <img src="../../assets/images/loader.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="text-muted mb-0 card-title">銷售總額</h5>
                <span class="h2 font-weight-bold mb-0">550,897</span>
              </div>
              <div class="col-auto col">
                <div>
                  <button class="btn btn-transparent-primary btn-lg btn-circle">
                    <i class="material-icons">payments</i>
                  </button>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-nowrap">本月</span>
              <span class="text-success float-right ml-2">
                <i class="material-icons">north</i>
                4.48%</span
              >
            </p>
            <apexcharts
              type="area"
              height="130px"
              :options="chartSparkOptions"
              :series="chartSparkData"
            ></apexcharts>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="text-muted mb-0 card-title">訂單總數</h5>
                <span class="h2 font-weight-bold mb-0">75,870</span>
              </div>
              <div class="col-auto col">
                <div>
                  <button class="btn btn-transparent-primary btn-lg btn-circle">
                    <i class="material-icons">receipt</i>
                  </button>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-nowrap">本月</span>
              <span class="text-danger float-right ml-2">
                <i class="material-icons">south</i> 3.23%</span
              >
            </p>
            <apexcharts
              type="area"
              height="130px"
              :options="chartSparkOptions"
              :series="chartSparkData"
            ></apexcharts>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="text-muted mb-0 card-title">註冊會員數</h5>
                <span class="h2 font-weight-bold mb-0">20,897</span>
              </div>
              <div class="col-auto col">
                <div>
                  <button class="btn btn-transparent-primary btn-lg btn-circle">
                    <i class="material-icons">person</i>
                  </button>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-nowrap">本月</span>
              <span class="text-danger float-right ml-2">
                <i class="material-icons">south</i> 1.55%</span
              >
            </p>
            <apexcharts
              type="area"
              height="130px"
              :options="chartSparkOptions"
              :series="chartSparkData"
            ></apexcharts>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-6">
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="h2 font-weight-bold mb-0">購物車放棄率</span>
              </div>
            </div>
            <apexcharts
              height="400"
              v-if="chartGaugeData"
              :options="chartGaugeOptions"
              :series="chartGaugeData"
            ></apexcharts>
            <div v-else class="text-center">
              <img src="../../assets/images/loader.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6">
        <div class="card shadow">
          <div class="card-body">
            <span class="h2 font-weight-bold mb-0">退貨率</span>
            <apexcharts
              height="400"
              :options="chartGaugeOptions"
              :series="chartGaugeData"
            ></apexcharts>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title mb-4 float-sm-left font-weight-bold">
              同期比較
            </h2>
            <button
              class="
                btn btn-sm btn-light btn-circle btn-ripple btn-icon
                float-sm-right
              "
            ></button>
            <apexcharts
              width="100%"
              height="400px"
              type="area"
              :options="chartOptions"
              :series="chartData"
            ></apexcharts>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-6 h-25">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title mb-4">子部門銷額占比</h3>
            <doughnut-chart
              :height="donutHeight"
              v-if="chartData2"
              :chartData="chartData2"
              :chartOptions="chartOptions2"
            ></doughnut-chart>
          </div>
        </div>
      </div>
       <div class="col-12 col-md-12 col-lg-6">
        <div class="card shadow">
          <div class="card-body p-0">
            <div class="card-header bg-white">Top 5 商品</div>
            <div class="table-responsive">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>品牌</th>
                    <th>熱門程度</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="brand in topData">
                    <td>{{ brand.name }}</td>
                    <td>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          :class="brand.info"
                          style="aria-valuemin= '0'
                          aria-valuemax= '100'"
                          :style="brand.valuenow"
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title mb-4 float-sm-left">相關產業新聞</h3>
            <div
              id="carouselIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselndicators"
                  v-for="(data, index) in carouselData"
                  :data-slide-to="index"
                  :class="{ active: index === 0 }"
                ></li>
              </ol>
              <div class="carousel-inner" style="max-height: 320px;cursor: pointer ">
                <div
                  v-for="(data, index) in carouselData"
                  class="carousel-item"
                  :class="{ active: index === 0 }"
                  @click="linkNews(data.news_link)"
                >
                    <img
                      class="d-block w-100"
                      style="height: 300px"
                      :src="data.image_link"
                    />
                  <div class="carousel-caption d-none d-block h-100">
                    <h2 class="text-dark font-weight-boldboo">
                      {{ data.news_title }}
                    </h2>
                    <p class="text-dark">{{ data.news_content }}</p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-body">
            <apexcharts
              width="100%"
              height="350px"
              v-if="chartData3"
              :options="chartOptions3"
              :series="chartData3"
            ></apexcharts>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let topData = [
  {
    name: "Apple",
    valuenow: {
      width: "84%",
      ariaValuenow: 84,
    },
    info: "bg-danger",
  },
  {
    name: "Sony",
    valuenow: {
      width: "56%",
      ariaValuenow: 56,
    },
    info: "bg-success",
  },
  {
    name: "Samsung",
    valuenow: {
      width: "45%",
      ariaValuenow: 45,
    },
    info: "bg-info",
  },
  {
    name: "Oppo",
    valuenow: {
      width: "32%",
      ariaValuenow: 32,
    },
    info: "bg-primary",
  },
  {
    name: "HTC",
    valuenow: {
      width: "15%",
      ariaValuenow: 15,
    },
    info: "bg-warning",
  },
];

import lineChart from "../chart/line-chart.vue";
import doughnutChart from "../chart/doughnut-chart.vue";
import VueApexCharts from "vue-apexcharts";
import chartOptions from "../../assets/js/chart/index_config.js";

export default {
  name: "DashboardWrapper",
  components: {
    lineChart,
    doughnutChart,
    apexcharts: VueApexCharts,
  },
  data: () => ({
    chartData: [],
    chartOptions: chartOptions.mixOptions,
    chartData2: "",
    chartOptions2: chartOptions.donutOptions,
    donutHeight: 250,
    chartData3: [],
    chartOptions3: chartOptions.heatmapOptions,
    chartSparkData: [],
    chartSparkOptions: chartOptions.sparkOptions,
    chartGaugeData: [67],
    chartGaugeOptions: chartOptions.gaugeOptions,
    topData: topData,
    carouselData: [],
  }),
  created() {
    let api = "../api/apex_test_data.json";
    this.getChart(api, "chartData");
    let api2 = "../api/test_data.json";
    this.getChart(api2, "chartData2");
    let api3 = "../api/apex_heat_map_data.json";
    this.getChart(api3, "chartData3");
    let api4 = "../api/apex_test_spark_data.json";
    this.getChart(api4, "chartSparkData");
    let api5 = "../api/apex_gauge_data.json";
    this.getChart(api5, "chartGaugeData");
    let api6 = "../api/news_feed/news_feed_data.json";
    this.getNewsFeed(api6);
  },
  mounted() {
    $('.carousel').carousel()
  },
  methods: {
    async getChart(url, chartData) {
      try {
        let res = await this.$http.get(url);
        this[chartData] = res.data.chartData;
      } catch (err) {
        console.log(err);
      }
    },
    async getNewsFeed(url) {
      try {
        let res = await this.$http.get(url);
        console.log(res.data.carousel)
        this.carouselData = res.data.carousel;
      } catch (err) {
        console.log(err);
      }
    },
    linkNews(url) {
      window.open(url, '_blank')
    }
  },
};
</script>

<style></style>
