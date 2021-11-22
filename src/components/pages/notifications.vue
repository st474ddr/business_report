<template>
  <div class="row">
    <div class="col-6 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">通知</div>
        <div class="card-body">
          <button
            class="btn btn-primary m-1 demo-basic-notification"
            @click="info('訊息通知')"
          >
            Basic
          </button>
          <button
            class="btn btn-warning m-1 demo-warning-notification"
            @click="warning('警示通知')"
          >
            Warning
          </button>
          <button
            class="btn btn-success m-1 demo-success-notification"
            @click="success('成功通知')"
          >
            Success
          </button>
          <button
            class="btn btn-danger m-1 demo-error-notification"
            @click="error('錯誤通知')"
          >
            Error
          </button>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-6">
      <div class="card shadow">
        <div class="card-header bg-white">特殊按鈕</div>
        <div class="card-body">
          <button
            class="btn btn-primary m-1 demo-close-notification"
            @click="close('可關閉')"
          >
            可關閉通知
          </button>
          <button
            class="btn btn-primary m-1 demo-permanent-notification"
            @click="permanent('不會關閉')"
          >
            需主動關閉通知
          </button>
          <button
            class="btn btn-primary m-1 demo-progress-notification"
            @click="progreeBar('進度條')"
          >
            進度條
          </button>
          <button
            class="btn btn-primary m-1 demo-multiple-notification"
            type="button"
            ref="mul"
            @click="multiple('多個通知')"
            :disabled="!multipleOn"
          >
            多個通知
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from "toastr";
toastr.options.extendedTimeOut = 0; //1000;
toastr.options.timeOut = 1000;
toastr.options.fadeOut = 250;
toastr.options.fadeIn = 250;

export default {
  data() {
    return {
      toasts: [],
      i: 0,
      multipleOn: true,
    };
  },
  mounted() {
    this.toasts = [
      new this.Toast(
        "error",
        "toast-bottom-full-width",
        "多個"
      ),
      new this.Toast("info", "toast-top-full-width", "上方全屏"),
      new this.Toast("warning", "toast-top-left", "左上角"),
      new this.Toast("success", "toast-top-right", "右上角"),
      new this.Toast("warning", "toast-bottom-right", "右下角"),
      new this.Toast("error", "toast-bottom-left", "左下角"),
    ];
  },
  methods: {
    Toast: function (type, css, msg) {
      this.type = type;
      this.css = css;
      this.msg = "這是" + msg + "通知";
    },
    info: function (msg) {
      toastr.info(msg);
    },
    warning: function (msg) {
      toastr.warning(msg);
    },
    success: function (msg) {
      toastr.success(msg);
    },
    error: function (msg) {
      toastr.error(msg);
    },
    close: function (msg) {
      toastr.options.closeButton = true;
      toastr.success(msg, "自定義標題", {
        timeOut: 5000,
      });
    },
    permanent: function (msg) {
      toastr.options.timeOut = 0;
      toastr.options.extendedTimeOut = 0;
      toastr.success(msg, "自定義標題");
    },
    progreeBar: function (msg) {
      toastr.options.progressBar = true;
      toastr.info(msg, "自定義標題");
    },
    multiple: function (msg) {
      toastr.error(msg, "自定義標題");
      this.multipleOn = true;
      this.appendToast();
    },
    appendToast: function () {
      if (this.i === this.toasts.length) {
        return;
      }
      let self = this;
      let delay = this.i === 0 ? 0 : 2100;
      window.setTimeout(function () {
        self.showToast();
      }, delay);

      // re-enable the button
      if (this.i === this.toasts.length - 1) {
        window.setTimeout(function () {
          self.multipleOn = false;
          self.i = 0;
        }, delay + 1000);
      }
    },
    showToast: function () {
      let t = this.toasts[this.i];
      toastr.options.positionClass = t.css;
      toastr[t.type](t.msg);
      this.i++;
      this.appendToast();
    },
  },
};
</script>

<style>
</style>