<template>
  <div class="dashboard__overview">
    <h2 class="dashboard__overview__title">Overview - Today</h2>
    <div class="dashboard__overview__cards">
      <div
        v-for="item in analytics"
        :key="item.media"
        :class="[
          'dashboard__overview__cards__media',
          `dashboard__overview__cards__media--${item.media}`
        ]">
          <AnalyticsCard
            v-for="data in item.data"
            :key="data.label"
            :analyticsValue="item.data"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import AnalyticsCard from "@/components/AnalyticsCard/AnalyticsCard.vue";

import formatNumberUtils from "../utils/formatNumber";
import formatPercentageUtils from "../utils/formatPercentage";

@Component({
  name: "DashboardOverview",
  components: {
    AnalyticsCard,
  },
})
export default class DashboardOverview extends Vue {
  @Getter("getAnalytics") analytics;

  public formatNumber = formatNumberUtils;

  public formatPercentage = formatPercentageUtils;
}
</script>

<style lang="scss">
.dashboard__overview {
  margin-top: 24px;

  &__title {
    text-align: left;
    font-size: $font-size-extra;
    color: $light-gray-text;
    font-weight: 700;
    margin-bottom: 16px;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__media {
      &:not(:first-of-type) {
        margin-left: 16px;
      }
    }
  }
}
</style>
