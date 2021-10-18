<template>
  <div class="h-100">
    <div class="row h-100">
      <div
        class="
          col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6
          m-auto
          px-3
          pt-5
          pb-4
          text-center
        "
      >
        <div class="card shadow">
          <div class="card-body">
            <h1 class="error-title font-weight-bold">503</h1>
            <p class="font-weight-bold text-secondary">
              目前伺服器超載，請稍後再登錄
            </p>
            <router-link to="/" class="btn btn-dark btn-lg mt-3">返回頁面</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>