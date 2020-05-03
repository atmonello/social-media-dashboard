<template>
  <div
    :class="[
      `dashboard__media__card dashboard__media__card--${media}`,
      {'dashboard__media__card--dark': isDark}
    ]"
  >
    <div class="username">
      <img class="username__icon" :src="getImagePath(media)" alt />
      <p class="username__text">{{username}}</p>
    </div>
    <div class="followers">
      <p>{{followers.count}}</p>
      <small>{{followers.label}}</small>
    </div>
    <div
      :class="[
        'change',
        `change--${followers.change > 0 ? 'positive' : 'negative'}`
      ]"
    >
      <i></i>
      <span>{{followers.change}} Today</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";

import "./MediaCard.vue.scss";

const Images = {
  facebook: "../images/icon-facebook.svg",
  instagram: "../images/icon-instagram.svg",
  twitter: "../images/icon-twitter.svg",
  youtube: "../images/icon-youtube.svg",
};

interface FollowersParams {
  count: number;
  label: "Followers" | "Subscribers";
  change: number;
}

type SocialMedia = "facebook" | "twitter" | "instagram" | "youtube";

@Component({
  name: "DashboardMediaCard",
})
export default class DashboardMediaCard extends Vue {
  @Prop({ required: true }) username: string;

  @Prop({ required: true }) followers: FollowersParams;

  @Prop({ required: true }) media: SocialMedia;

  @Getter("getDarkTheme") isDark;

  // eslint-disable-next-line class-methods-use-this
  public getImagePath(mediaName) {
    return Images[mediaName];
  }
}
</script>
