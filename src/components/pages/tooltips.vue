<template>
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">基本樣式</div>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-primary m-2"
            data-toggle="tooltip"
            data-placement="top"
            title="提示"
          >
            上方顯示
          </button>
          <button
            type="button"
            class="btn btn-secondary m-2"
            data-toggle="tooltip"
            data-placement="right"
            title="提示"
          >
            右方顯示
          </button>
          <button
            type="button"
            class="btn btn-warning m-2"
            data-toggle="tooltip"
            data-placement="bottom"
            title="提示"
          >
            下方顯示
          </button>
          <button
            type="button"
            class="btn btn-danger m-2"
            data-toggle="tooltip"
            data-placement="left"
            title="提示"
          >
            左方顯示
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">特殊題示</div>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-secondary m-2"
            data-toggle="tooltip"
            data-html="true"
            title="<em>這是</em> <u>HTML</u><b>提示</b>"
          >
            HTML提示
          </button>
          <button
            type="button"
            class="btn btn-secondary m-2"
            data-toggle="tooltip"
            data-html="true"
            title="<img width='100px' height='100px'
                                            src='assets/images/avatar/team-1.jpg'>"
          >
            圖片提示
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },
};
</script>

<style>
</style>