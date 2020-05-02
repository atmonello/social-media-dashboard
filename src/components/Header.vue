<template>
  <header class="dashboard__header">
    <div class="dashboard__header__text">
      <h1>Social Media Dashboard</h1>
      <small>Total Followers: 23.004</small>
    </div>
    <div class="dashboard__header__toggle">
      <dashboard-toggle />
    </div>
  </header>
</template>

<style lang="scss">
.dashboard__header {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import DashboardToggle from "@/components/Toggle.vue";

export default {
  components: {
    DashboardToggle,
  },
};
</script>
