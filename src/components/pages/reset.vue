<template>
  <div class="row h-100">
                <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 m-auto px-3 pt-5 pb-4 m-3 card shadow">
                    <img src="../../assets/images/logo.jpg" height="50" alt="Logo" class="logo justify-content-center d-flex mx-auto mb-3">
                    <form class="p-3" method="post">
                        <div class="form-group">
                            <input type="text" name="email" class="form-control" placeholder="請輸入 email..." required>
                        </div>

                        <button class="btn btn-primary btn-block my-4">
                            重設密碼
                        </button>
                        <router-link to="login" class="d-block text-center">已有帳號?</router-link>
                        <hr>
                        <router-link to="register" class="d-block text-center">建立新帳號</router-link>
                    </form>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>