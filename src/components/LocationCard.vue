<template>
  <v-card light id="locationcard">
    <v-card-title primary-title>
    <div>
        <div class="idkey">{{locationData.id}}</div>
        <h3 class="headline mb-0 mt-2">
          {{locationData.position.lat}},
           {{locationData.position.lng}}
        </h3>
        <div>{{locationData.address}}
        </div>
    </div>
    </v-card-title>
    <v-card-actions class="roboto">
      <v-spacer/>
      <v-tooltip bottom>
          <v-btn flat icon color="primary" slot="activator"
          class="">
            <v-icon>delete</v-icon>
          </v-btn>
          <span>Eliminar Ubicacion?</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn flat icon color="primary"
        class="" slot="activator">
          <v-icon>mode_edit</v-icon>
        </v-btn>
        <span>Editar?</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LocationCard',
  props: {
    locationData: Object
  },
  data () {
    return {
    }
  }
}
</script>


<style lang="stylus">

.idkey
  font-size 9px
</style>
