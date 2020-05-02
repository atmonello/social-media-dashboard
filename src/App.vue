<template>
  <div id="app" :class="{'app--dark': isDark, 'app--light': !isDark}">
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
  name: "App",
})
export default class App extends Vue {
  @Getter("getDarkTheme") isDark;
}
</script>
