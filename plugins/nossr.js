require("bootstrap");

import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  // preLoad:1.3,
  error: require(`@/assets/img/bg17.jpg`),
  loading: require(`@/assets/img/bg15.jpg`),
  // attempt:3,
  observer: true,
  // optional
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1
  }
});
