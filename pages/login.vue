<template>
    <div class="page-header header-filter login-page" filter-color="orange">
        <div class="page-header-image"
             style="background-image: url('img/login.jpg')">
        </div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="">
                        </div>


                        <fg-input class="no-border input-lg"
                                  addon-left-icon="now-ui-icons users_circle-08"
                                  placeholder="First Name...">
                        </fg-input>

                        <fg-input class="no-border input-lg"
                                  addon-left-icon="now-ui-icons text_caps-small"
                                  placeholder="Last Name...">
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block">Get Started</a>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Create Account</a>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Need Help?</a>
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components/now-ui-kit";
export default {
  name: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    async addUser() {
      await this.$auth.login({
        data: this.userForm
      });
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<style>
</style>
