<template>
  <div class="main-content container">
    <div class="page-header">
      <div>
        <span class="h2">{{ currentRouteName }}</span>
        <small> {{ currentRouteNote }}</small>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardWrapper",
  data() {
    return {
      routeName: this.$route.meta.title,
      routeNote: this.$route.meta.note,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.title;
    },
    currentRouteNote() {
      return this.$route.meta.note;
    },
  },
};
</script>

<style></style>
