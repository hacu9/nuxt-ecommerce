<template>
  <div>
    <Navbar :transparent="false" :color-on-scroll="250" />
    <no-ssr>
      <notifications></notifications>
    </no-ssr>

    <nuxt  class="wrapper" />
    <Footer :backgroundColor="'black'" />
  </div>
</template>
<script>
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
export default {
  name: "default",
  components: {
    Navbar,
    Footer,
  },
  created(){
    // global
      this.$store.dispatch('getRoutes')
      //localization 
      this.localize(this.$i18n.locale);
     this.$i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
       this.localize(newLocale)
    }
  }
};
</script>