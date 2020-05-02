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

<style lang="scss">
.dashboard__media__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 16px 16px;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 16px 32px;
  position: relative;
  background-color: $light-card-bg;
  // width: 200px;
  flex: 1 1 0;

  &--dark {
    background-color: $dark-card-bg;
  }

  &:after {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &--facebook {
    &:after {
      background: $border-facebook;
    }
  }

  &--twitter {
    &:after {
      background: $border-twitter;
    }
  }

  &--instagram {
    position: relative;

    &:after {
      background: $border-instagram;
    }
  }

  &--youtube {
    &:after {
      background: $border-youtube;
    }
  }

  .username {
    margin: 16px 0;
    display: flex;
    align-items: center;

    &__icon {
      margin-right: 8px;
    }

    &__text {
      font-size: $font-size-tiny;
      font-weight: 700;
      color: $light-gray-text;
    }
  }

  .followers {
    p {
      font-size: $font-size-large * 2;
      font-weight: 700;
    }

    small {
      text-transform: uppercase;
      font-size: $font-size-tiny;
      color: $light-gray-text;
    }
  }

  .change {
    margin-top: 16px;
    font-size: $font-size-tiny;
    display: flex;
    align-items: center;
    font-weight: 700;

    i {
      display: block;
      width: 0;
      height: 0;
      margin-right: 4px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }

    &--positive {
      i {
        border-bottom: 5px solid $font-lime;
      }
      span {
        color: $font-lime;
      }
    }
    &--negative {
      i {
        border-top: 5px solid $font-red;
      }
      span {
        color: $font-red;
      }
    }
  }
}
</style>
