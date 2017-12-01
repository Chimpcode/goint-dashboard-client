<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
body, html
  margin: 0px
  background-color: #F7F7F8
  overflow-y auto !important
#app{
  background-color: #F7F7F8
}
</style>
