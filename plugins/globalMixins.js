import Vue from "vue";
import { mapGetters } from "vuex";

const User = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters(["user", "loggedIn"])
      },

      mounted() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
          document.body.classList.add(bodyClass);
        }
      },
      beforeDestroy() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
          document.body.classList.remove(bodyClass);
        }
      },

      transition: "el-fade-in-linear"
    });
  }
};

Vue.use(User);
