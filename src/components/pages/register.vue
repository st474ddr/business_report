<template>
   <div class="h-100">
            <div class="row h-100">
                <div class="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 m-auto px-3 pt-5 pb-4 card shadow m-3">
                    <img src="../../assets/images/logo.jpg" height="50" alt="Logo" class="logo justify-content-center d-flex mx-auto mb-3">
                    <form class="p-3" method="post">
                        <div class="form-group">
                            <input type="text" name="email" class="form-control" placeholder="請輸入 email..." required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="請輸入密碼..." required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="confirm_password" class="form-control" placeholder="確認密碼..." required>
                        </div>
                        <button class="btn btn-primary btn-block my-4">
                            註冊
                        </button>
                        <router-link to="reset" class="d-block text-center">忘記密碼 ?</router-link>
                        <hr>
                        <router-link href="login" class="d-block text-center">已有帳號 ?</router-link>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>