<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header bg-white">
          Summernote Editor
          <a href="https://summernote.org/" target="_blank" class="float-right"
            ><i class="fas fa-external-link-alt"></i
          ></a>
        </div>
        <div class="card-body">
          <div id="summernote"></div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header bg-white">
          CKEditor
          <a href="https://ckeditor.com/" target="_blank" class="float-right"
            ><i class="fas fa-external-link-alt"></i
          ></a>
        </div>
        <div class="card-body">
          <div id="ck-editor"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $("#summernote").summernote({
      height: 400,
    });
  },
};
</script>

<style>
</style>