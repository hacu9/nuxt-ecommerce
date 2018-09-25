<template>
  <navbar 
    :transparent="transparent" 
    :color-on-scroll="colorOnScroll" 
    position="fixed" 
    menu-classes="ml-auto">
    <template slot-scope="{toggle, isToggled}">
      <nuxt-link 
        v-popover:popover1 
        :to="localePath('index')" 
        class="navbar-brand">
        B de Brand
      </nuxt-link>
      <el-popover 
        ref="popover1" 
        popper-class="popover" 
        placement="bottom" 
        width="200" 
        trigger="hover">
        <div class="popover-body">Designed by Invision. Coded by Creative Tim</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">

      <li class="nav-item">
        <nuxt-link 
          :to="localePath('about')" 
          class="nav-link">{{ $t('about.name') }}</nuxt-link>
      </li>

      <drop-down 
        :title="$t('store.name')" 
        tag="li" 
        icon="now-ui-icons design_app" 
        class="nav-item">

        <nuxt-link 
          :to="localePath('store')" 
          class="dropdown-item">
          <i class="now-ui-icons shopping_box"/> {{ $t('store.women') }}
        </nuxt-link>

        <nuxt-link 
          :to="localePath('signup')" 
          class="dropdown-item">
          <i class="now-ui-icons shopping_box"/> {{ $t('store.men') }}
        </nuxt-link>

      </drop-down>

      <li class="nav-item">
        <nuxt-link 
          :to="localePath('signup')" 
          class="nav-link">{{ $t('pricing.name') }}</nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link 
          :to="localePath('contact')" 
          class="nav-link">{{ $t('contact.name') }}</nuxt-link>
      </li>

      <drop-down 
        v-if="loggedIn" 
        tag="li" 
        class="nav-item">
        <template slot="title">
          <a 
            class="dropdown-toggle nav-link" 
            data-toggle="dropdown">
            <span class="no-icon"><img 
              :src="require(`~/../shared/avatars/${user.avatar}`)" 
              alt="Avatar" 
              class="avatar img-raised"></span>
          </a>
        </template>

        <nuxt-link 
          :to="localePath('profile')" 
          class="dropdown-item">
          <i class="now-ui-icons shopping_box"/> {{ $t('auth.profile') }}
        </nuxt-link>

        <nuxt-link 
          :to="localePath('dashboard')" 
          class="dropdown-item">
          <i class="now-ui-icons shopping_box"/> {{ $t('auth.dashboard') }}
        </nuxt-link>

        <a 
          href="#" 
          class="dropdown-item" 
          @click="logout()">Log Out </a>
      </drop-down>

      <li 
        v-if="!loggedIn" 
        class="nav-item">
        <nuxt-link 
          :to="localePath('login')" 
          class="nav-link btn btn-primary">
          <i class="now-ui-icons shopping_box"/> {{ $t('auth.login') }}
        </nuxt-link>
      </li>

      <drop-down 
        :title="$store.state.i18n.locale" 
        tag="li" 
        icon="now-ui-icons flag" 
        class="nav-item text-right">
        <nuxt-link 
          v-for="lang in $i18n.locales" 
          :key="lang.code" 
          :to="switchLocalePath(lang.code)" 
          class="dropdown-item">
          <img 
            :src="require(`~/../shared/flags/${lang.iso.split('-')[1]}.png`)" 
            class="avatar" 
            alt=""> {{ lang.name }}
        </nuxt-link>
      </drop-down>
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
  name: "MainNavbar",
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  props: {
    transparent: {
      type:Boolean,
      default:true
    },
    colorOnScroll: {
      type:Number,
      default:400
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  }
};
</script>

<style scoped>
</style>
