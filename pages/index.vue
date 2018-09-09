<template>
  <div>
    <HomeSlider/>
    <div class="section">
      <div class="container">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="section-description text-center">
            <h2 class="title">Sections you will love</h2>
            <h5 class="description"> Build pages in no time using pre-made sections! From headers to footers, you will be able to choose the best combination for your project. We have created multiple sections for you to put together and customise into pixel perfect example pages.
            </h5>
            <a href="sections.html" target="_blank" class="btn btn-primary btn-round">View All Sections</a>
          </div>
        </div>
      </div>
    </div>
    <HomeAbout/>

    <HomeProducts :color="'gray'" />

  </div>
</template>

<script>
import HomeSlider from "./partials/home-slider";
import HomeProducts from "./partials/home-products";
import HomeAbout from "./partials/home-about";
export default {
  components: {
    HomeSlider,
    HomeProducts,
    HomeAbout
  },
  transition: "el-fade-in-linear"
};
</script>