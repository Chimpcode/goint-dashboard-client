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
          <v-card-title class="title mb-4"> Agregar Ubicacion &nbsp;<span class="green--text">{{infomessage}}</span></v-card-title>
          <gmap-map
            :center="locationForm.position"
            :zoom="13"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in locations"
              :position="m.position"
              :clickable="true"
              :draggable="m.address === ''"
              @click="center=m.position"
            ></gmap-marker>

            <gmap-marker
              :position="locationForm.position"
              :clickable="true"
              :draggable="true"              
              @click="center=locationForm.position"
              @position_changed="updateMarker(locationForm, 'position', $event)"
            ></gmap-marker>
          </gmap-map>
          <v-card-text>
            <div>
              <h5>{{locationForm.position.lng}}, {{locationForm.position.lat}}</h5>
            </div>
            <v-text-field v-model="locationForm.address" label="Direccion" name="locationAddress"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator" @click.native.stop="createNewLocation">
                <v-icon>add</v-icon> Crear
              </v-btn>
              <span>Crear?</span>
            </v-tooltip>
          </v-card-actions>
        </template>

        <template v-if="kindForm === 'tienda'">
          <v-card-title class="title"> Agregar Tienda &nbsp;<span class="green--text">{{infomessage}}</span></v-card-title>
          <v-card-text>
            <v-text-field v-model="tiendaForm.name" label="Nombre" name="tiendaName"/>
            <v-text-field v-model="tiendaForm.description" label="Descripcion" name="tiendaDescription"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator" @click.native.stop="createNewStore">
                <v-icon>add</v-icon> Crear
              </v-btn>
              <span>Crear?</span>
            </v-tooltip>
          </v-card-actions>
        </template>


        <template v-if="kindForm === 'sector'">
          <v-card-title class="title"> Agregar Sector &nbsp;<span class="green--text">{{infomessage}}</span></v-card-title>
          <v-card-text>
            <v-text-field v-model="sectorForm.name" label="Nombre" name="sectorName"/>
          </v-card-text>
          <v-card-actions class="roboto">
            <v-spacer/>
            <v-tooltip bottom>
              <v-btn flat color="primary"
              class="" slot="activator" @click.native.stop="createNewCluster">
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
        // console.log('kindform', this.kindForm)
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
      infomessage: '',
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
        address: '',
        position: {lat: -12.122369, lng: -77.030339}
      },
      locations: [
        { position: {lat: -11.891670, lng: -77.044149}, address: 'AURB. ADLksdlka ASDLK 343' },
        { position: {lat: -11.885330, lng: -77.058117}, address: 'AURB. ADLksdlka ASDLK 343' },
        { position: {lat: -11.900784, lng: -77.038151}, address: 'AURB. ADLksdlka ASDLK 343' },
        { position: {lat: -11.893948, lng: -77.043290}, address: 'AURB. ADLksdlka ASDLK 343' }
      ]
    }
  },
  methods: {
    closeDialog: function () {
      this.$emit('on-close-dialog', false)
      this.infomessage = ''
      // cluster
      this.sectorForm.name = ''
      // store
      this.tiendaForm.name = ''
      this.tiendaForm.description = ''
      // location
      this.locationForm.address = ''
    },
    createNewCluster: function () {
      this.infomessage = 'Nuevo sector ha sido creado'
      this.$emit('on-create-cluster', this.sectorForm)
    },
    createNewStore: function () {
      this.infomessage = 'Nueva tienda ha sido creada'
      this.$emit('on-create-store', this.tiendaForm)
    },
    createNewLocation: function () {
      this.infomessage = 'Nueva ubicacion ha sido creada'
      this.$emit('on-create-location', this.locationForm)
    },
    updateMarker: function (object, field, event) {
      if (field === 'position') {
        object.position = {
          lat: event.lat(),
          lng: event.lng()
        }
      }
    },
    handleLocationError: function (browserHasGeolocation) {
      this.infomessage =
      (browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.')
    }
  },
  created: function () {
    // var infoWindow = new google.maps.InfoWindow({map: map});

    var self = this
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        // infoWindow.setPosition(pos)
        // infoWindow.setContent('Location found.')
        self.center.lat = pos.lat
        self.center.lng = pos.lng

        self.locationForm.position.lat = pos.lat
        self.locationForm.position.lng = pos.lng
      }, function () {
        self.handleLocationError(true)
      })
    } else {
      // Browser doesn't support Geolocation
      self.handleLocationError(false)
    }
  }
}
</script>

<style lang="stylus">

</style>
