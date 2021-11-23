<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Drop Zone</div>
        <div class="card-body">
          <vue-dropify height="200" message="請選擇檔案上傳"></vue-dropify>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Size Limit (3M)</div>
        <div class="card-body">
          <vue-dropify height="200" size="3M" message="請選擇檔案上傳"></vue-dropify>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">
          Specific File Types (PDF / PNG / PSD)
        </div>
        <div class="card-body">
          <input
            type="file"
            class="dropify"
            data-allowed-file-extensions="pdf png psd"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
      <div class="card shadow">
        <div class="card-header bg-white">Default Image</div>
        <div class="card-body">
          <input
            type="file"
            class="dropify"
            data-default-file="assets/images/avatar/team-1.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDropify from "vue-dropify";
export default {
  components: {
    "vue-dropify": VueDropify,
  },
};
</script>

<style>
</style>