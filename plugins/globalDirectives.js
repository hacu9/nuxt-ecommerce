import clickOutside from "../directives/click-outside.js";
import Vue from "vue";

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
  }
};
Vue.use(GlobalDirectives);
