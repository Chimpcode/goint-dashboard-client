<template>
  <v-app id="app">

    <div class="loading-screen" v-if="isLoading">
      <span class="loading-text opensans">Cargando ...</span>
    </div>

    <div class="loading-screen-black" v-if="isShortLoading">
      <div class="loading-dialog">
        <span class="loading-short-text opensans">
          <i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
          Procesando ...
        </span>
      </div>
    </div>

    <router-view></router-view>

    <v-snackbar
      :timeout="5000"
      :bottom="true"
      :multi-line="true"
      v-model="showsnackbar"
    >
      {{ snackbarmessage }}
      <v-btn flat color="skyblue" @click.native="showsnackbar = false"></v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { EventBus } from './event_bus'

export default {
  name: 'app',
  data () {
    return {
      isLoading: false,
      isShortLoading: false,
      showsnackbar: false,
      snackbarmessage: ''
    }
  },
  methods: {
    changeLoading (value) {
      this.isLoading = value
    },
    changeShortLoading (value) {
      this.isShortLoading = value
    },
    receiveMessage (message) {
      this.showsnackbar = true
      this.snackbarmessage = message
    }
  },
  created () {
    EventBus.$on('is-loading', this.changeLoading)
    EventBus.$on('is-short-loading', this.changeShortLoading)
    EventBus.$on('snackbar-message', this.receiveMessage)
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

.loading-text
.loading-short-text
  color: #a72324
  font-size 18px
  font-weight bold
  position absolute


.loading-short-text
  transform translateX(-55px) translateY(-10px)
  left 40%
  top 50%

.loading-text
  transform translateX(-55px) translateY(-10px)
  left 50%
  top 50%


.loading-screen
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 9
  background #fdfdfde8

.loading-screen-black
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 8
  background rgba(0, 0, 0, 0.40)

.loading-dialog
  position absolute
  top 50%
  left 50%
  transform translateX(-150px) translateY(-75px)
  width 300px
  height 150px
  z-index 9
  background #f7f7f8
</style>
