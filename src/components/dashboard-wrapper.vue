<template>
  <div class="main-content container">
    <div class="page-header">
      <div>
        <span class="h2">{{ currentRouteName }}</span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "DashboardWrapper",
  data: () => ({}),
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
