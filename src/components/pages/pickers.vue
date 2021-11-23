<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">基本選擇器</div>
          <div class="card-body">
            <input type="date" class="form-control" />
          </div>
        </div>
      </div>
    </div>
    <div class="page-header mt-4">
      <span class="h2">顏色選擇器</span>
      <small>選取喜歡的顏色</small>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">基本樣式</div>
          <div class="card-body">
            <input type="color" class="form-control" value="#414288" />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">圓盤樣式</div>
          <div class="card-body">
            <div class="wheel mx-auto" id="colorWheelDemo"></div>
            <label class="mt-3">選擇顏色</label>
            <input
              type="text"
              class="form-control"
              name="color"
              id="selected_color"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iro from '@jaames/iro';
export default {
  mounted() {
    

    let colorWheel = new iro.ColorPicker("#colorWheelDemo", {
      width: 200,
      layout: [
        {
          component: iro.ui.Wheel,
          options: {
            wheelLightness: true,
            wheelAngle: 0,
            wheelDirection: "anticlockwise",
          },
        },
      ],
      layoutDirection: "horizontal",
    });

    colorWheel.on("color:change", function (color) {
      $("#selected_color").val(color.hexString);
    });
  },
};
</script>

<style>
</style>