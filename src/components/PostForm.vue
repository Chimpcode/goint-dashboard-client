<template>
  <v-layout row wrap>
    <v-flex xs12 md5 offset-md3>
      <v-layout row wrap>
        <v-flex xs12>
          <h3>{{ isNew? 'Crear promocion': 'Editar promocion'}}</h3>
        </v-flex>
        <!-- image -->
        <v-flex xs12>
          <div class="teal py-5 text-xs-center">
              <v-flex>
                <v-icon class="display-1">add</v-icon>
              </v-flex>
          </div>
        </v-flex>
          
        <v-flex xs12>
          <v-text-field 
            label="nombre" 
            name="title"
            v-model="postEdit.name"
            >
          </v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field
            name="cupones"
            label="Capacidad Cupones"
            single-line
            prepend-icon="local_activity"
            v-model="postEdit.cupones"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="timepicker_menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              label="fecha vencimiento"
              v-model="postEdit.finishDate"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="postEdit.finishDate" no-title scrollable actions>
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-menu>
        </v-flex>

        <v-flex xs12>
          <v-select
            v-bind:items="location_items"
            v-model="postEdit.location"
            label="Ubicarlo en:"
            single-line
            bottom
          ></v-select>
        </v-flex>

        <v-flex xs12>
          <v-text-field 
            multi-line
            :rows="2"
            label="descripcion"
            name="description"
            v-model="postEdit.description">
          </v-text-field>
        </v-flex>
          
        <v-flex xs12 class="text-xs-right">
          <v-btn color="primary">{{ isNew ? 'CREAR' : 'EDITAR' }}</v-btn>
        </v-flex>
      </v-layout>
    </v-flex> 

  </v-layout>
</template>

<script>
export default {
  name: 'PostForm',
  props: {
    isNew: Boolean,
    postObj: {
      type: Object
    }
  },
  data () {
    return {
      location_items: ['ZONA 1', 'ZONA 2', 'ZONA 3'],
      timepicker_date: null,
      timepicker_menu: false
    }
  },
  computed: {
    postEdit: function () {
      if (this.isNew === true) {
        return { finishDate: null }
      } else {
        return this.postObj
      }
    }
  }
}
</script>

<style lang="stylus">

</style>
