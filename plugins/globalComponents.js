import { Parallax } from "../components/now-ui-kit";
import Vue from "vue";

/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
  }
};
Vue.use(globalComponents);

// export default globalComponents;
