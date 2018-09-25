<template>
  <el-carousel height="100vh">
    <el-carousel-item>
      <div class="page-header header-filter">
        <div 
          :style="{ backgroundImage: 'url(' + require(`@/assets/img/bg20.jpg`) + ')' }" 
          class="page-header-image">
          <!-- style="background-image: url('../../shared/img/bg20.jpg')" -->

        </div>
        <div class="content-center">
          <div class="container text-left">
            <div class="content-center">
              <div class="row">
                <div class="col-md-5">
                  <div class="iframe-container">
                    <!-- <iframe height="250"
                                                        src="https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0"
                                                        frameborder="0" allowfullscreen></iframe> -->
                  </div>
                </div>
                <div class="col-md-6 ml-auto mr-auto text-right">
                  <h1 class="title">On the run tour.</h1>
                  <h4 class="description ">On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which documents the September 12 and 13, 2014, shows of American singers' Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </el-carousel-item>
    <el-carousel-item>
      <div class="page-header header-filter">
        <div 
          :style="{ backgroundImage: 'url(' + require(`@/assets/img/bg15.jpg`) + ')' }" 
          class="page-header-image">
          >
        </div>
        <div class="content-center">
          <div class="container">
            <div class="content-center">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <h1 class="title">Island of legends.</h1>
                  <h4 class="description ">The islands of Malta and Gozo are brilliant for a family holiday, packed with fun places to visit whatever your children’s ages. The islands’ small size means everywhere is within easy reach.</h4>
                  <br>
                  <h5>Connect with us on:</h5>
                  <div class="buttons">
                    <a 
                      href="#pablo" 
                      class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                      <i class="fab fa-twitter"/>
                    </a>
                    <a 
                      href="#pablo" 
                      class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                      <i class="fab fa-facebook-square"/>
                    </a>
                    <a 
                      href="#pablo" 
                      class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                      <i class="fab fa-google-plus"/>
                    </a>
                    <a 
                      href="#pablo" 
                      class="btn btn-icon btn-neutral btn-danger btn-round  mt-2">
                      <i class="fab fa-instagram"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="page-header header-filter">
        <div 
          v-lazy:background-image="require(`@/assets/img/bg17.jpg`)" 
          class="page-header-image">
          <!--  :style="{ backgroundImage: 'url(' + require(`@/assets/img/bg17.jpg`) + ')' }" -->
        </div>
        <div class="content-center">
          <div class="container">
            <div class="content-center">
              <div class="row">
                <div class="col-md-6 text-left">
                  <h1 class="title">Arctic Sea ice.</h1>
                  <h4 class="description ">According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h4>
                  <br>
                  <div class="buttons">
                    <a 
                      href="#pablo" 
                      class="btn btn-neutral btn-primary btn-lg mr-1">
                      <i class="now-ui-icons files_single-copy-04"/> Read More..
                    </a>
                    <a 
                      href="#pablo" 
                      class="btn btn-primary btn-lg">
                      <i class="now-ui-icons arrows-1_share-66"/> Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { FormGroupInput, Button } from "@/components/now-ui-kit";
import { Carousel, CarouselItem } from "element-ui";
export default {
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>

<style>
</style>
