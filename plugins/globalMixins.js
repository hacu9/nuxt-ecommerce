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

      // transition: "el-fade-in-linear",
      transition(to, from) {
        if (!from) return "el-zoom-in-bottom";
        return +to.query.page < +from.query.page
          ? "el-zoom-in-top"
          : "el-zoom-in-bottom";
      }
    });
  }
};

Vue.use(User);
