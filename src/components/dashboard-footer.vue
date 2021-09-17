<template>
  <div class="dashboard-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardFooter',
  data: () => ({ content: '© Allan' }),
}
</script>

<style></style>
