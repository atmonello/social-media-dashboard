<template>
  <div class="dashboard__toggle">
    <span>Dark Mode</span>
    <div class="dashboard__toggle__container">
      <input type="radio" v-model="toggle" />
      <div class="toggle" :class="{'on': toggle}" @click="setToggle()">
        <span class="toggle__icon"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component({
  name: "DashboardToggle",
})
export default class DashboardToggle extends Vue {
  @Mutation("setTheme") setTheme;

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
      background-color: blue;
      box-sizing: border-box;
      padding: 4px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &__icon {
        border-radius: 100%;
        border: 1px solid #fff;
        height: 100%;
        width: 24px;
        background-color: #fff;
      }

      &.on {
        background: red;
        justify-content: flex-end;
      }
    }
  }
}
</style>
