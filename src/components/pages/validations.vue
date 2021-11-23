<template>
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="card shadow">
        <div class="card-header bg-white">表單驗證</div>
        <div class="card-body">
          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">姓</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div class="valid-feedback">很不錯</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">名</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  value="Otto"
                  required
                />
                <div class="valid-feedback">很不錯</div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">縣市</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">請提供正確的縣市</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom04">鄉鎮</label>
                <select class="custom-select" id="validationCustom04" required>
                  <option selected disabled value="">請選擇...</option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">請提供正確的鄉鎮</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom05">郵遞區號</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">請提供正確的郵遞區號</div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  我同意合約內容
                </label>
                <div class="invalid-feedback">送出前請先勾選</div>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">送出</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  },
};
</script>

<style>
</style>