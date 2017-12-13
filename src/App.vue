<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  created () {
    // this.$graphito.printTransport()
    // this.$graphito.call_query('fetchAllUsers').then(
    //   result => {
    //     console.log('app.vue', result)
    //   }
    // )
  }
}
</script>

<style lang="stylus">
body, html
  margin: 0
  background-color: #F7F7F8
  overflow-y auto !important
#app{
  background-color: #F7F7F8
}
</style>
