import Vue from "vue";
import { mapGetters } from "vuex";
import { Validator } from "vee-validate";

const User = {
  install(Vue, Options) {
    Vue.mixin({
      computed: {
        ...mapGetters(["user", "loggedIn","routes"])
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
      

      methods: {
        ////////// vvalidate locale
        localize (localeName) {
          // localize your app here, like i18n plugin.
          // asynchronously load the locale file then localize the validator with it.
          import(`vee-validate/dist/locale/${localeName}`).then(locale => {
            Validator.localize(localeName, locale);
          })
        },
        //////////notifications
        notification( notifyMsg, type = "info",
         verticalAlign = 'bottom', horizontalAlign = 'right',
         time = 5000,
         icon = "ui-1_bell-53") {
          this.$notify({
            message: notifyMsg,
            timeout: time,
            icon: "now-ui-icons " + icon,
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: type
          });
          // this.$store.dispatch("notified");
        }
      },
      // transition: "el-fade-in-linear",
      transition(to, from) {
        if (!from) return "el-zoom-in-bottom";
        return +to.query.page < +from.query.page
          ? "el-zoom-in-top"
          : "el-zoom-in-bottom";
      },
    });
  }
};

Vue.use(User);
