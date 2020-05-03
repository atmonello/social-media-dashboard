<template>
  <div class="dashboard">
    <div :class="[
      'dashboard__header__wrapper',
      {'dashboard__header__wrapper--dark': isDark}
    ]">
      <dashboard-header />
    </div>
    <div class="dashboard__media container">
      <dashboard-media-card
        v-for="media in socialMedia"
        :key="media.media"
        :username="media.username"
        :followers="media.followers"
        :media="media.media"
      />
    </div>
    <div class="dashboard__overview container">
      <dashboard-overview />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import DashboardHeader from "@/components/Header.vue";
import DashboardMediaCard from "@/components/MediaCard/MediaCard.vue";
import DashboardOverview from "@/components/Overview.vue";

import "./Dashboard.vue.scss";

interface SocialMedia {
  media: "facebook" | "twitter" | "instagram" | "youtube";
  username: string;
  followers: {
    count: number;
    change: number;
    label: "Followers" | "Subscribers";
  };
}

@Component({
  name: "Dashboard",
  components: {
    DashboardHeader,
    DashboardMediaCard,
    DashboardOverview,
  },
})
export default class Dashboard extends Vue {
  @Getter("getDarkTheme") isDark

  private socialMedia: Array<SocialMedia> = [
    {
      media: "facebook",
      username: "atmonello",
      followers: {
        count: 1234,
        change: 78,
        label: "Followers",
      },
    },
    {
      media: "twitter",
      username: "atmonello",
      followers: {
        count: 987,
        change: 102,
        label: "Followers",
      },
    },
    {
      media: "instagram",
      username: "atmonello",
      followers: {
        count: 1046,
        change: 94,
        label: "Followers",
      },
    },
    {
      media: "youtube",
      username: "atmonello",
      followers: {
        count: 885,
        change: -141,
        label: "Subscribers",
      },
    },
  ];
}
</script>
