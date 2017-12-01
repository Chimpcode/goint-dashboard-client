<template>
  <v-card light id="placecard">
    <v-card-title primary-title>
    <div>
        <h3 class="headline mb-0">{{clusterData.name}}</h3>
        <div>{{clusterData.description}}
        </div>
    </div>
    </v-card-title>
    <v-card-text>
        <h5>Tiendas: </h5>
        <div>
            
        </div>
    </v-card-text>
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
  name: 'ClusterCard',
  props: {
    clusterData: Object
  }
}
</script>

<style lang="stylus">

</style>
