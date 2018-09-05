<template>
  <div class="wrapper">
    <div class="section">
      {{ $t('about') }}
    <p v-if="$auth.loggedIn">
      Hello {{ $auth.user.name }}
    </p>
    <p v-if="!loggedIn">
      Please sign in
    </p>
    {{loggedIn}}
    </div>
  </div>
</template>

<script>
export default {};
</script>