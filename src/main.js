// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

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
  template: '<App/>',
  components: { App }
})
