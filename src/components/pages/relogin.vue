<template>
  <div class="h-100 text-center">
    <div class="row h-100">
      <div
        class="
          col-10 col-sm-8 col-md-6 col-lg-3 col-xl-3
          m-auto
          px-3
          pt-5
          pb-4
          m-3
          card
          shadow
        "
      >
        <div class="avatar avatar-xl bg-primary mx-auto mb-3">
          <img
            src="assets/images/avatar/team-2.jpg"
            class="avatar-img rounded-circle mx-auto"
            alt="Avatar"
          />
        </div>
        <h2 class="">刺刺</h2>
        <form class="py-3" method="post">
          <input
            type="password"
            name="password"
            class="form-control mb-2 w-75 mx-auto"
            placeholder="請輸入密碼..."
            required
          />
          <div class="pt-4">
            <button class="btn btn-dark btn-circle btn-lg">
              <i class="material-icons">chevron_right</i>
            </button>
          </div>
        </form>
        <router-link to="reset" class="d-block text-center text-muted pt-5"
          >取消
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>