<template>
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">Google Maps</div>
        <div class="card-body">
          <div id="map" style="height: 450px; width: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      // 預設經緯度在信義區附近
      lat: 25.0325917,
      lng: 121.5624999,
    };
  },
  mounted() {
    this.initMap();
    this.setMarker();
  },
  methods: {
    // 建立地圖
    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
        mapTypeControl: false,
      });
    },
    setMarker() {
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map,
      });
    },
  },
};
</script>

<style>
</style>