<template>
    <div class="page-header signup-page section-image">
        <div class="page-header-image" style="background-image: url('img/bg18.jpg')">
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 ml-auto mr-auto">
                        <div class="info info-horizontal">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons media-2_sound-wave"></i>
                            </div>
                            <div class="description">
                                <h5 class="info-title">Marketing</h5>
                                <p class="description">
                                    We've created the marketing campaign of the website. It was a very interesting collaboration.
                                </p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-primary">
                                <i class="now-ui-icons media-1_button-pause"></i>
                            </div>
                            <div class="description">
                                <h5 class="info-title">Fully Coded in HTML5</h5>
                                <p class="description">
                                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                                </p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-info">
                                <i class="now-ui-icons users_single-02"></i>
                            </div>
                            <div class="description">
                                <h5 class="info-title">Built Audience</h5>
                                <p class="description">
                                    There is also a Fully Customizable CMS Admin Dashboard for this product.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mr-auto">
                        <div class="card card-signup">
                            <div class="card-body">
                                <h4 class="card-title text-center">{{$t('auth.register')}}</h4>
                                <div class="social text-center">
                                    <n-button round icon class="btn-twitter">
                                        <i class="fab fa-twitter"></i>
                                    </n-button>
                                    <n-button round icon class="btn-dribbble">
                                        <i class="fab fa-dribbble"></i>
                                    </n-button>
                                    <n-button round icon class="btn-facebook">
                                        <i class="fab fa-facebook"> </i>
                                    </n-button>
                                    <h5 class="card-description"> or be classical </h5>
                                </div>
                                <fg-input addon-left-icon="now-ui-icons users_circle-08" v-model="form.name" :placeholder="$t('auth.firstName')">
                                </fg-input>

                                <fg-input addon-left-icon="now-ui-icons text_caps-small" v-model="form.lastName" :placeholder="$t('auth.lastName') ">
                                </fg-input>

                                <fg-input addon-left-icon="now-ui-icons ui-1_email-85" v-model="form.email" :placeholder="$t('auth.email')">
                                </fg-input>

                                <fg-input addon-left-icon="now-ui-icons ui-1_settings-gear-63" v-model="form.password" type="password" :placeholder="$t('auth.password')">
                                </fg-input>

                                <n-checkbox v-model="form.agree">
                                    I agree to the terms and
                                    <a href="#something">conditions</a>.
                                </n-checkbox>
                                <div @click="register()" class="card-footer text-center">
                                    <n-button type="primary" round size="lg"> {{$t('auth.start')}}</n-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
  Card,
  Button,
  FormGroupInput,
  Checkbox
} from "@/components/now-ui-kit";
export default {
  name: "signup-page",
  bodyClass: "signup-page",
  components: {
    Card,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    register() {
      console.log("sending");
      this.form.password_confirmation = this.form.password;
      this.$store.dispatch("signup", this.form);
    }
  },
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        password: "",
        email: "",
        agree: false
      }
    };
  }
};
</script>
<style>
</style>
