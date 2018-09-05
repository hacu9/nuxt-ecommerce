<template>
  <div>
    <Navbar />
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>