<template>
  <div class="main-wrapper">
    <dashboard-sidebar></dashboard-sidebar>
    <div class="right-area">
      <dashboard-header></dashboard-header>

        <dashboard-wrapper></dashboard-wrapper>

    </div>
  </div>
</template>

<script>
import DashboardHeader from "./components/dashboard-header";
import DashboardSidebar from "./components/dashboard-sidebar";
import DashboardWrapper from "./components/dashboard-wrapper";
export default {
  name: "App",
  components: {
    DashboardHeader,
    DashboardSidebar,
    DashboardWrapper,
  },
  data: () => ({
    pageheaderTitle: "hello"
  }),
};
</script>

<style>
</style>
