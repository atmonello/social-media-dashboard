<template>
  <header class="dashboard__header container" :class="{'dashboard__header--dark': isDark}">
    <div class="dashboard__header__text">
      <h1>Social Media Dashboard</h1>
      <small>Total Followers: {{followers}}</small>
    </div>
    <div class="dashboard__header__toggle">
      <dashboard-toggle />
    </div>
  </header>
</template>

<style lang="scss">
.dashboard__header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__text, &__toggle {
    margin-top: 30px;
  }

  &__text {
    h1 {
      font-size: $font-size-large;
      color: $light-blue-text;
      font-weight: 700;
      font-size: $font-size-extra;
      margin-bottom: 4px;
    }
    small {
      font-size: $font-size-small;
      font-weight: 700;
      color: $light-gray-text;
    }

    .dashboard__header--dark & {
      h1 {
        color: $dark-white-text;
      }
    }
  }
}
</style>

<script lang="ts">
import DashboardToggle from "@/components/Toggle.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
  name: "DashboardHeader",
  components: {
    DashboardToggle,
  },
})
export default class DashboardHeader extends Vue {
  @Getter("getDarkTheme") isDark;

  @Prop({ required: true }) followers;
}
</script>
