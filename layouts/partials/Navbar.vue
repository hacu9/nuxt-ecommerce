<template>
    <navbar position="fixed" :transparent="transparent" :color-on-scroll="colorOnScroll" menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
            <nuxt-link v-popover:popover1 class="navbar-brand" :to="localePath('index')">
                B de Brand
            </nuxt-link>
            <el-popover ref="popover1" popper-class="popover" placement="bottom" width="200" trigger="hover">
                <div class="popover-body">Designed by Invision. Coded by Creative Tim</div>
            </el-popover>
        </template>
        <template slot="navbar-menu">

            <li class="nav-item">
                <nuxt-link class="nav-link" :to="localePath('about')">{{ $t('about.name') }}</nuxt-link>
            </li>

            <drop-down tag="li" :title="$t('store.name')" icon="now-ui-icons design_app" class="nav-item">

                <nuxt-link class="dropdown-item" :to="localePath('store')">
                    <i class="now-ui-icons shopping_box"></i> {{ $t('store.women') }}
                </nuxt-link>

                <nuxt-link class="dropdown-item" :to="localePath('signup')">
                    <i class="now-ui-icons shopping_box"></i> {{ $t('store.men') }}
                </nuxt-link>

            </drop-down>

            <li class="nav-item">
                <nuxt-link class="nav-link" :to="localePath('signup')">{{ $t('pricing.name') }}</nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" :to="localePath('contact')">{{ $t('contact.name') }}</nuxt-link>
            </li>

            <drop-down tag="li" v-if="loggedIn" class="nav-item">
                <template slot="title">
                    <a class="dropdown-toggle nav-link" :class="{'no-caret': hideArrow}" data-toggle="dropdown">
                        <i :class="icon"></i>
                        <span class="no-icon"><img alt="Avatar" class="avatar img-raised" :src="require(`~/../shared/avatars/${user.avatar}`)"></span>
                    </a>
                </template>

                <nuxt-link class="dropdown-item" :to="localePath('profile')">
                    <i class="now-ui-icons shopping_box"></i> {{ $t('auth.profile') }}
                </nuxt-link>

                <nuxt-link class="dropdown-item" :to="localePath('dashboard')">
                    <i class="now-ui-icons shopping_box"></i> {{ $t('auth.dashboard') }}
                </nuxt-link>

                <a @click="logout()" href="#" class="dropdown-item">Log Out </a>
            </drop-down>

            <li class="nav-item" v-if="!loggedIn">
                <nuxt-link class="nav-link btn btn-primary" :to="localePath('login')">
                    <i class="now-ui-icons shopping_box"></i> {{ $t('auth.login') }}
                </nuxt-link>
            </li>

            <drop-down tag="li" :title="$store.state.i18n.locale" icon="now-ui-icons flag" class="nav-item text-right">
                <nuxt-link v-for="lang in $i18n.locales" :key="lang.code" class="dropdown-item" :to="switchLocalePath(lang.code)">
                    <img :src="require(`~/../shared/flags/${lang.iso.split('-')[1]}.png`)" class="avatar" alt=""> {{lang.name}}
                </nuxt-link>
            </drop-down>
            <button type="primary" block @click="notifyVue('bottom','left')">Bottom Left</button>

        </template>
    </navbar>
</template>

<script>
import {
  DropDown,
  NavbarToggleButton,
  Navbar,
  NavLink
} from "@/components/now-ui-kit";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    notifyVue(verticalAlign, horizontalAlign) {
      this.$store.dispatch("notify", { msg: "algo" });
      //   console.log("ashis");
      //   var color = Math.floor(Math.random() * 4 + 1);
      //   this.$notify({
      //     message:
      //       "Welcome to <b>Now Ui Dashboard Pro</b> - a beautiful freebie for every web developer",
      //     timeout: 3000,
      //     icon: "now-ui-icons ui-1_bell-53",
      //     horizontalAlign: horizontalAlign,
      //     verticalAlign: verticalAlign,
      //     type: "info"
      //   });
    }
  }
};
</script>

<style scoped>
</style>
