<template>
  <div class="page-header signup-page section-image">
    <div 
      class="page-header-image" 
      style="background-image: url('img/bg18.jpg')"/>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ml-auto mr-auto">
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="now-ui-icons media-2_sound-wave"/>
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
                <i class="now-ui-icons media-1_button-pause"/>
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
                <i class="now-ui-icons users_single-02"/>
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
            <form 
              novalidate 
              @submit.prevent="validateBeforeSubmit">
              <div class="card card-signup">
                <div class="card-body">
                  <h4 class="card-title text-center">{{ $t('auth.register') }}</h4>
                  <div class="social text-center">
                    <n-button 
                      round 
                      icon 
                      class="btn-twitter">
                      <i class="fab fa-twitter"/>
                    </n-button>
                    <n-button 
                      round 
                      icon 
                      class="btn-dribbble">
                      <i class="fab fa-dribbble"/>
                    </n-button>
                    <n-button 
                      round 
                      icon 
                      class="btn-facebook">
                      <i class="fab fa-facebook"/>
                    </n-button>
                    <h5 class="card-description"> or be classical </h5>
                  </div>
                  <fg-input 
                    v-validate="'required'" 
                    v-model="form.name" 
                    :placeholder="$t('auth.firstName')" 
                    :class="{'has-danger': errors.has('first_name') }" 
                    addon-left-icon="now-ui-icons users_circle-08" 
                    name="first_name"/>

                  <fg-input 
                    v-validate="'required'" 
                    v-model="form.lastName" 
                    :placeholder="$t('auth.lastName') " 
                    :class="{'has-danger': errors.has('last_name') }" 
                    addon-left-icon="now-ui-icons text_caps-small" 
                    name="last_name"/>

                  <fg-input 
                    v-validate="'required|email'" 
                    v-model="form.email" 
                    :placeholder="$t('auth.email')" 
                    :class="{'has-danger': errors.has('email') }" 
                    addon-left-icon="now-ui-icons ui-1_email-85" 
                    name="email"/>

                  <fg-input 
                    v-validate="'required|confirmed:password_confirmation'" 
                    v-model="form.password" 
                    :placeholder="$t('auth.password')" 
                    :class="{'has-danger': errors.has('password') }" 
                    addon-left-icon="now-ui-icons ui-1_settings-gear-63" 
                    name="password" 
                    type="password"/>

                  <fg-input 
                    v-validate="'required'" 
                    ref="password_confirmation" 
                    v-model="form.password_confirmation" 
                    :placeholder="$t('auth.password_confirmation')" 
                    :class="{'has-danger': errors.has('password_confirmation') }" 
                    addon-left-icon="now-ui-icons ui-1_settings-gear-63" 
                    name="password_confirmation" 
                    type="password"/>

                  <n-checkbox v-model="form.agree">
                    I agree to the terms and
                    <a href="#something">conditions</a>.
                  </n-checkbox>
                  <div class="card-footer text-center">
                    <n-button 
                      type="primary" 
                      native-type="submit" 
                      round 
                      size="lg"> {{ $t('auth.start') }}</n-button>
                  </div>
                </div>
              </div>
            </form>
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
    name: "SignupPage",
    bodyClass: "signup-page",
    components: {
        Card,
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        [FormGroupInput.name]: FormGroupInput
    },
    data () {
        return {
            form: {
                name: "",
                lastName: "",
                password: "",
                password_confirmation: "",
                email: "",
                agree: false
            }
        };
    },
    methods: {
        async register () {
            console.log("sending");
            await this.$axios.post("/auth/signup", this.form);

            this.$notify({
                message: this.$t("auth.registerSuccess"),
                type: "success"
            });

            await this.$auth.login({
                data: {
                    email: this.form.email,
                    password: this.form.password
                }
            });

            this.$notify({
                message: this.$t("auth.success"),
                type: "success"
            });
        },
        validateBeforeSubmit () {
            this.$validator.validateAll().then(validated => {
                console.log(validated);
                if (validated) {
                    this.register();
                    return;
                }
                var err = this.errors.all().join("<br>");
                this.$notify({
                    type: "danger",
                    message: err
                });
            });
        }
    },
};
</script>
<style>
</style>
