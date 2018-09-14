<template>
  <div>
    <Navbar :transparent="false" :color-on-scroll="250" />
    <no-ssr>
      <notifications></notifications>
    </no-ssr>

    <nuxt class="wrapper" />
    <Footer :backgroundColor="'black'" />
  </div>
</template>
<script>
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import Alert from "@/components/now-ui-kit/Alert";
import { mapState } from "vuex";
export default {
  name: "default",
  components: {
    Navbar,
    Footer,
    [Alert.name]: Alert
  },
  computed: {
    ...mapState(["notifyMsg", "notify", "notifyType"])
  },
  watch: {
    notify() {
      console.log("alo?");
      this.notifyVue(this.notifyMsg, "bottom", "left", this.notifyType);
    }
  },
  methods: {
    notifyVue(
      notifyMsg,
      verticalAlign,
      horizontalAlign,
      type = "info",
      icon = "ui-1_bell-53"
    ) {
      this.$notify({
        message: notifyMsg,
        timeout: 3000,
        icon: "now-ui-icons " + icon,
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type
      });
      // this.$store.dispatch("notified");
    }
  }
};
</script>