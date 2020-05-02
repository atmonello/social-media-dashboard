<template>
  <div class="dashboard">
    <dashboard-header />
  </div>
</template>

<script>
import DashboardHeader from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Dashboard",
  components: {
    DashboardHeader,
  },
})
export default class Dashboard extends Vue {}
</script>
