<template>
  <div class="dashboard__toggle">
    <span
      class="dashboard__toggle__label"
      :class="{'dashboard__toggle__label--dark': isDark}"
    >Dark Mode</span>
    <div class="dashboard__toggle__container">
      <input type="radio" v-model="toggle" />
      <div class="toggle" :class="{'toggle--on': isDark}" @click="setToggle()">
        <span class="toggle__icon"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";

@Component({
  name: "DashboardToggle",
})
export default class DashboardToggle extends Vue {
  @Mutation("setTheme") setTheme;

  @Getter("getDarkTheme") isDark;

  private toggle = false;

  public setToggle() {
    this.toggle = !this.toggle;
    const theme = this.toggle ? "dark" : "light";
    this.setTheme(theme);
  }
}
</script>

<style lang="scss">
.dashboard__toggle {
  display: flex;
  align-items: center;
  padding-right: 64px;

  &__label {
    font-weight: 700;
    color: $light-gray-text;
    font-size: $font-size-small;

    &--dark {
      color: $dark-white-text;
    }
  }

  &__container {
    position: relative;
    margin-left: 16px;

    .toggle {
      cursor: pointer;
      position: absolute;
      z-index: 1;
      height: 32px;
      width: 64px;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      border-radius: 20px;
      background: $light-toggle;
      padding: 4px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &__icon {
        border-radius: 100%;
        height: 100%;
        width: 24px;
        background-color: #fff;
      }

      &--on {
        background: $dark-toggle;
        justify-content: flex-start;
      }
    }
  }
}
</style>
