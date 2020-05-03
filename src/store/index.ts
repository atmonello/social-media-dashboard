import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type Theme = "light" | "dark";

type SocialMedia = "facebook" | "instagram" | "twitter" | "youtube";

interface AnalyticsValue {
  label: string;
  value: number;
  change: number;
}

interface SocialMediaAnalytics {
  media: SocialMedia;
  data: AnalyticsValue[];
}

type Analytics = SocialMediaAnalytics[];

interface DashboardState {
  theme: Theme;
  analytics: Analytics;
}

interface DashboardMutations {
  setTheme(state: DashboardState, payload: Theme): void;
}

interface DashboardGetters {
  getDarkTheme(state: DashboardState): boolean;
  getAnalytics(state: DashboardState): Analytics;
}

const dashboardState: DashboardState = {
  theme: "light",
  analytics: [
    {
      media: "facebook",
      data: [
        {
          label: "Page Views",
          value: 87,
          change: 3,
        },
        {
          label: "Likes",
          value: 52,
          change: -2,
        },
      ],
    },
    {
      media: "twitter",
      data: [
        {
          label: "Retweets",
          value: 117,
          change: 303,
        },
        {
          label: "Likes",
          value: 507,
          change: 553,
        },
      ],
    },
    {
      media: "instagram",
      data: [
        {
          label: "Likes",
          value: 5462,
          change: 2257,
        },
        {
          label: "Profile Views",
          value: 52123,
          change: 1375,
        },
      ],
    },
    {
      media: "youtube",
      data: [
        {
          label: "Likes",
          value: 107,
          change: -19,
        },
        {
          label: "Total Views",
          value: 1407,
          change: -12,
        },
      ],
    },
  ],
};

const dashboardMutations: DashboardMutations = {
  setTheme(state, value) {
    state.theme = value;
  },
};

const dashboardGetters: DashboardGetters = {
  getDarkTheme(state) {
    return state.theme === "dark";
  },
  getAnalytics(state) {
    return state.analytics;
  },
};

export default new Vuex.Store({
  state: { ...dashboardState },
  mutations: { ...dashboardMutations },
  getters: { ...dashboardGetters },
});
