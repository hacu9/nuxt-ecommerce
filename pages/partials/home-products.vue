<template>
    <div class="presentation-page">
        <div class="section section-sections presentation-page" :data-background-color="color">
            <div class="container">
                <div class="col-md-8 ml-auto mr-auto mb-4">
                    <div class="section-description text-center">
                        <h2 class="title">Sections you will love</h2>
                        <h5 class="description"> Build pages in no time using pre-made sections! From headers to footers, you will be able to choose the best combination for your project. We have created multiple sections for you to put together and customise into pixel perfect example pages.
                        </h5>
                        <a href="sections.html" target="_blank" class="btn btn-primary btn-round">View All Sections</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="section-cols">
                    <div class="row">
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/header1.jpg'" alt="header1">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/header2.jpg'" alt="header2">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/header3.jpg'" alt="header3">
                            <img class="rellax" data-rellax-speed="4" v-lazy="'img/presentation-page/pricing5.jpg'" alt="pricing5">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/header4.jpg'" alt="header4">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/features5.jpg'" alt="">
                            <img class="rellax" data-rellax-speed="5" v-lazy="'img/presentation-page/features2.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/features6.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/features7.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/features8.jpg'" alt="">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/blogpost5.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/team1.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/team2.jpg'" alt="">
                        </div>
                        <div class="col-md-3">
                            <img v-lazy="'img/presentation-page/team3.jpg'" alt="">
                            <img class="rellax" data-rellax-speed="5" v-lazy="'img/presentation-page/contact1.jpg'" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "home-products",
  props: {
    color: {
      type: String,
      default: "gray"
    }
  }
};
</script>

<style>
</style>
