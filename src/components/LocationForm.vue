<template>
  <div>
    <v-dialog v-model="isOpen" :width="typeDialog[kindForm]" persistent>
      <v-card>
        <v-card-text>
          <v-btn @click.native.stop="closeDialog" flat icon style="float: right;">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-text>

        <template v-if="kindForm === 'ubicacion'">
          <v-card-title class="title mb-4"> Agregar Ubicacion</v-card-title>
          <gmap-map
            :center="center"
            :zoom="13"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in locations"
              :position="m.position"
              :clickable="true"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
          <v-card-text>
            <v-text-field v-model="locationForm.address" label="Direccion" name="locationAddress"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator">
                <v-icon>add</v-icon> Crear
              </v-btn>
              <span>Crear?</span>
            </v-tooltip>
          </v-card-actions>
        </template>


        <template v-if="kindForm === 'tienda'">
          <v-card-title class="title"> Agregar Tienda</v-card-title>
          <v-card-text>
            <v-text-field v-model="tiendaForm.name" label="Nombre" name="tiendaName"/>
            <v-text-field v-model="tiendaForm.description" label="Descripcion" name="tiendaDescription"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator">
                <v-icon>add</v-icon> Crear
              </v-btn>
              <span>Crear?</span>
            </v-tooltip>
          </v-card-actions>
        </template>


        <template v-if="kindForm === 'sector'">
          <v-card-title class="title"> Agregar Sector</v-card-title>
          <v-card-text>
            <v-text-field v-model="sectorForm.name" label="Nombre" name="sectorName"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator">
                <v-icon>add</v-icon> Crear
              </v-btn>
              <span>Crear?</span>
            </v-tooltip>
          </v-card-actions>
        </template>

        
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'LocationForm',
  props: {
    kindForm: String
  },
  computed: {
    isOpen: {
      get: function () {
        console.log('kindform', this.kindForm)
        if (this.kindForm === '' || this.kindForm === undefined) {
          return false
        }
        return true
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  data () {
    return {
      center: { lat: -11.890211, lng: -77.043939 },
      typeDialog: {
        sector: '40%',
        tienda: '40%',
        ubicacion: '85%'
      },
      sectorForm: {
        name: ''
      },
      tiendaForm: {
        name: '',
        description: ''
      },
      locationForm: {
        address: ''
      },
      locations: [
        { position: {lat: -11.891670, lng: -77.044149}, address: 'AURB. ADLksdlka ASDLK 343', name: 'place 1', coupons: 12, createdAt: '14/2/17' },
        { position: {lat: -11.885330, lng: -77.058117}, address: 'AURB. ADLksdlka ASDLK 343', name: 'place 2', coupons: 12, createdAt: '14/2/17' },
        { position: {lat: -11.900784, lng: -77.038151}, address: 'AURB. ADLksdlka ASDLK 343', name: 'place 3', coupons: 12, createdAt: '14/2/17' },
        { position: {lat: -11.893948, lng: -77.043290}, address: 'AURB. ADLksdlka ASDLK 343', name: 'place 4', coupons: 12, createdAt: '14/2/17' }
      ]
    }
  },
  methods: {
    closeDialog: function () {
      this.$emit('on-close-dialog', false)
    }
  }
}
</script>

<style lang="stylus">

</style>
