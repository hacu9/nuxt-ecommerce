import Vue from "vue";
import { mapState } from "vuex";

const User = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapState({
          user: "auth/user",
          loggedIn: "auth/loggedIn"
        })
      }
    });
  }
};

Vue.use(User);
