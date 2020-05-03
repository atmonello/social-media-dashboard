<template>
  <div
    :class="[
      'dashboard__analytics__card',
      {}
    ]"
  >
    <code>{{analyticsValue}}</code>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

type AnalyticsValue = {
  label: string;
  value: number;
  change: number;
}

@Component({
  name: "AnalyticsCard",
})
export default class AnalyticsCard extends Vue {
  @Prop({ required: true }) analyticsValue: AnalyticsValue;
}
</script>
