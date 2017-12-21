// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import GraphPlugin from 'graphito'
import graphito from './graphrecipes'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://13.90.253.208:9300/api/v1'

Vue.config.productionTip = false
Vue.use(GraphPlugin, {
  // url: 'http://13.90.253.208:9300/api/v1/u'
  url: 'http://13.90.253.208:60000/simple/v1/cjb5vhjxf002q01897ggfz3b3'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAzJcJRIwCI1WXUTXNX9BpHuyKPWXoKmU8',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

import('./stylus/main.styl')

Vue.use(Vuetify, {
  theme: {
    primary: '#C12B35',
    lazy: '#cbcbcb'
  }
})

//   primary: #C12B35
//   accent: $red.accent-2
//   secondary: $grey.lighten-1
//   info: $blue.lighten-1
//   warning: $amber.darken-2
//   error: $red.accent-4
//   success: $green.lighten-2
//   lazy: #cbcbcb

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  graphito,
  template: '<App/>',
  components: { App }
})
