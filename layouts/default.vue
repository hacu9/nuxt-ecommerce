<template>
  <div>
    <Navbar :transparent="false" :color-on-scroll="250" />
    <nuxt class="wrapper" />

    <Footer :backgroundColor="'black'" />
    <!-- :type="'default'" -->
  </div>
</template>
<script>
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
export default {
  components: {
    Navbar,
    Footer
  },
  transition(to, from) {
    if (!from) return "el-zoom-in-bottom";
    return +to.query.page < +from.query.page
      ? "el-zoom-in-top"
      : "el-zoom-in-bottom";
  }
};
</script>