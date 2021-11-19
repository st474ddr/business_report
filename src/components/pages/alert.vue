<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">顏色種類</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.alert .alert-*</code></p>
            <div class="alert alert-primary" role="alert">primary</div>
            <div class="alert alert-secondary" role="alert">secondary</div>
            <div class="alert alert-success" role="alert">success</div>
            <div class="alert alert-danger" role="alert">danger</div>
            <div class="alert alert-warning" role="alert">warning</div>
            <div class="alert alert-info" role="alert">info</div>
            <div class="alert alert-light" role="alert">light</div>
            <div class="alert alert-dark" role="alert">dark</div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">Link 顏色種類</div>
          <div class="card-body">
            <p class="text-muted">
              使用 <code>.alert .alert-*</code> 配合 <code>.alert-link</code>
            </p>
            <div class="alert alert-primary" role="alert">
              primary <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-secondary" role="alert">
              secondary <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-success" role="alert">
              success <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-danger" role="alert">
              danger <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-warning" role="alert">
              warning <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-info" role="alert">
              info <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-light" role="alert">
              light <a class="alert-link"> link</a>
            </div>
            <div class="alert alert-dark" role="alert">
              dark <a class="alert-link"> link</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">可移除警告視窗</div>
          <div class="card-body">
            <p class="text-muted">使用 <code>.alert .alert-* .alert-dismissible .fade .show</code></p>
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-primary alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-secondary alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-light alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <strong>警告!</strong> 請確認您的欄位是否有誤
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6">
        <div class="card shadow">
          <div class="card-header bg-white">彈窗通知</div>
          <div class="card-body">
            <p class="text-muted">搭配 <code>sweetalert2.js</code> 觸發</p>
            <button class="btn btn-primary basic-alert" @click="basicAlert">
              基本樣式
            </button>
            <button class="btn btn-primary success-alert" @click="succesAlert">
              送出成功通知
            </button>
            <button
              class="btn btn-primary success-toast-alert"
              @click="toastAlert"
            >
              小視窗成功通知
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "alert",
  data: () => ({}),
  methods: {
    basicAlert: function () {
      Swal.fire("Hello world!");
    },
    succesAlert: function () {
      Swal.fire("點擊成功", "您已點擊按鈕", "success");
    },
    toastAlert: function () {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "登入成功",
      });
    },
  },
};
</script>

<style>
</style>