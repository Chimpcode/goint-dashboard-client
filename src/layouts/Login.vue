<template>
  <div id="login">
    <v-layout row wrap class="cc-container">
      <v-flex xs12 sm5>
        <div class="r-side-content">
          <v-container>
            <v-layout row>
              <v-flex xs8 offset-xs2 sm8 offset-sm2 class="text-xs-center translate-middle">

                <img class="mt-4 mb-5 pb-4 hidden-sm-and-down" src="../assets/logo_goint.png" width="50%"/>
                <img class="mt-4 mb-5 hidden-md-and-up" src="../assets/logo_goint.png" width="120"/>

                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  :rules="emailRules"
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  :append-icon="pass_v ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (pass_v = !pass_v)"
                  :type="pass_v ? 'password' : 'text'"
                ></v-text-field>

                <v-btn color="primary" :to="{ name: 'Dashboard - Promociones'}" dark>Login</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <chimpcode-banner class="chimpcode-banner"/>
        </div>
      </v-flex>
      <v-flex xs12 sm7>
        <div class="l-side-content">

        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ChimpcodeBanner from '../components/ChimpcodeBanner'

export default {
  components: {
    ChimpcodeBanner
  },
  data () {
    return {
      pass_v: true,
      email: '',
      emailRules: [
        v => {
          return !!v || 'E-mail is required'
        },
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  created () {
  }
}
</script>

<style lang="stylus">
html, body, #app, #login
    height: 100%

.cc-container
    height: 100%

.l-side-content
    min-height: 100%
    background-image: url(https://source.unsplash.com/random/1500x1500)
    background-position: center center
    background-repeat: no-repeat
    background-attachment: fixed
    background-size: cover
    background-color: #FF3F54
    background-blend-mode: multiply

.r-side-content
    background: white
    min-height: 100%

  /* .side-content{
    line-height: 50%;
  } */
@media only screen and (min-width: 700px)
    .r-side-content
      padding-top: 54px

@media only screen and (max-width: 767px)
    .l-side-content
        background-image:url(https://source.unsplash.com/random/768x600)
    .translate-middle
        transform: translateY(50%)

@media only screen and (max-width: 600px)
    .translate-middle
      transform: translateY(0%)

@media only screen and (max-height: 700px)
    .translate-middle
      transform: translateY(0%)

@media only screen and (min-height: 500px)
    .chimpcode-banner
      position absolute

@media only screen and (max-height: 500px)
    .chimpcode-banner
      position relative

.chimpcode-banner
  bottom 5px
  left 12px
</style>
