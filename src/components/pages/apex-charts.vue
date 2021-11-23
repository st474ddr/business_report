<template>
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">Mixed Charts</div>
        <div class="card-body">
          <apexcharts :options="option4" :series="series4"></apexcharts>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Bar Chart</div>
        <div class="card-body">
          <div id="chart-bar"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Area Chart</div>
        <div class="card-body">
          <div id="chart-area"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">Candle Stick Chart</div>
        <div class="card-body">
          <div id="candle-stick-chart"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Line Chart</div>
        <div class="card-body">
          <div id="chart"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Donut</div>
        <div class="card-body">
          <div id="chart-donut"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">Radar</div>
        <div class="card-body">
          <div id="chart-radar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let colorPalette = ["#3f51b5", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          type: "line",
          height: 280,
        },
        colors: colorPalette,
        series: [
          {
            name: "sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        series4: [
          {
            name: "Sales",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
          },
          {
            name: "Purchases",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
          },
          {
            name: "Profit",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
          },
        ],
        option4: {
          chart: {
            height: 280,
            type: "line",
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },

          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100],
            },
          },
          labels: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003",
            "09/01/2003",
            "10/01/2003",
            "11/01/2003",
          ],
          markers: {
            size: 0,
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            title: {
              text: "Points",
            },
            min: 0,
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;
              },
            },
          },
        },
      },
    };
  },
};
</script>

<style>
</style>