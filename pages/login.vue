<template>
    <div class="page-header header-filter login-page" filter-color="orange">
        <div class="page-header-image" style="background-image: url('img/login.jpg')">
        </div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <form @submit.prevent="validateBeforeSubmit" novalidate>
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="">
                        </div>
                        
                        <fg-input class="no-border input-lg " name="email" v-model="form.email" 
                        addon-left-icon="now-ui-icons users_circle-08" 
                        :placeholder="$t('auth.email')" 
                        v-validate="'required|email'"
                        :class="{'has-danger': errors.has('email') }">
                        </fg-input>

                        <fg-input class="no-border input-lg" v-model="form.password" 
                        type="password" addon-left-icon="now-ui-icons text_caps-small" 
                        :placeholder="$t('auth.password')"
                        name="password" v-validate="'required'"
                        :class="{'has-danger': errors.has('password')}"
                        >
                        </fg-input>

                        <n-checkbox inline v-model="form.remember_me">{{ $t('auth.remember') }}</n-checkbox>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                  <n-button type="primary" nativeType="submit" block round size="lg"> {{$t('auth.start')}}</n-button>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <nuxt-link :to="localePath('signup')" href="#pablo" class="link footer-link">{{$t('auth.create')}}</nuxt-link>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <nuxt-link to="#pablo" class="link footer-link">{{$t('common.help')}}</nuxt-link>
                                </h6>
                            </div>
                        </template>
                    </card>
                    </form>
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
  name: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
        remember_me: false
      }
    };
  },
  methods: {
    async login() {
      await  this.$auth.login({
        data: this.form
      });

      this.notification(this.$t('auth.success'),'success','top','center')

    //   this.$router.push({
    //     path: "/"
    //   });
    },
     validateBeforeSubmit() {
      this.$validator.validateAll().then((validated) => {
          console.log(validated)
        if (validated) {
          this.login()
          return
        }
        var err = this.errors.all().join('<br>')
        this.notification(err,'danger','top','center')
      })
    }
  }
};
</script>
<style>
</style>
