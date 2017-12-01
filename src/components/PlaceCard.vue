<template>
  <v-card light draggable="true" id="placecard" ondragstart="drag(event)">
    <v-card-title primary-title>
      <div>
          <h3 class="headline mb-0">{{placeData.name}}</h3>
          <div>{{placeData.description}}
          </div>
      </div>
    </v-card-title>
    <v-card-text>
        <h5>Ubicaciones: </h5>
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
  name: 'PlaceCard',
  props: {
    placeData: Object
  },
  methods: {
    drag: function (ev) {
      ev.dataTransfer.setData('Text', ev.target.id)
    }
  }
}
</script>

<style lang="stylus">
  
.created-at
  font-size 9px
</style>
