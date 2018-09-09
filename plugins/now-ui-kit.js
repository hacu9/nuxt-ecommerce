import "@/assets/sass/now-ui-kit.scss";
import "@/assets/sass/demo.scss";
// import globalDirectives from "./globalDirectives";
// import globalMixins from "./globalMixins";
// import globalComponents from "./globalComponents";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

export default {
  install(Vue) {
    // Vue.use(globalDirectives);
    // Vue.use(globalMixins);
    // Vue.use(globalComponents);
  }
};
