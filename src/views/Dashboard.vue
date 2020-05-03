<template>
  <div class="dashboard">
    <div :class="[
      'dashboard__header__wrapper',
      {'dashboard__header__wrapper--dark': isDark}
    ]">
      <dashboard-header />
    </div>
    <div class="dashboard__media">
      <dashboard-media-card
        v-for="media in socialMedia"
        :key="media.media"
        :username="media.username"
        :followers="media.followers"
        :media="media.media"
      />
    </div>
    <div class="dashboard__overview"></div>
  </div>
</template>

<script lang="ts">
import DashboardHeader from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";
import DashboardMediaCard from "@/components/MediaCard/MediaCard.vue";
import { Getter } from "vuex-class";

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

<style lang="scss">
.dashboard {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header__wrapper {
    display: flex;
    width: 100vw;
    height: 25vh;
    align-items: flex-start;
    justify-content: center;
    background-color: $light-header-bg;

    &--dark {
      background-color: $dark-header-bg;
    }
  }

  &__media {
    display: flex;
    justify-content: space-around;
    margin-top: -50px;
    z-index: 1;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 960px;
  }
}
</style>
