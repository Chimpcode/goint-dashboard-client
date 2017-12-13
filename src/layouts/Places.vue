<template>
  <div id="places">
    <v-layout row wrap>
      <v-flex xs6 sm4>
        <div
          class="ma-2 pa-2">
          <span class="title-header">Puntos de ubicacion</span>
        </div>
      </v-flex>
      <v-flex xs6 sm4>
        <div
          class="ma-2 pa-2">
          <span class="title-header">Tiendas</span>
        </div>
      </v-flex>
      <v-flex xs6 sm4>
        <div
          class="ma-2 pa-2">
          <span class="title-header">Sectores</span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row style="height: 85vh;">
      <v-flex xs6 sm4 class="overflowy">
        <location-card
          class="ma-2"
          :location-data="location"
          @on-edit-location="editLocation"
          v-for="(location, i) in locations"
          :key="i"
          />
        <new-card
          class="ma-2"
          kind-card="ubicacion"
          @on-open-form="openForm"/>
      </v-flex>
      <v-flex xs6 sm4 class="overflowy">
        <place-card
        class="ma-2"
        :place-data="store"
        v-for="(store, i) in stores"
        @on-edit-store="editStore"
        :key="i"/>
        <new-card
          class="ma-2"
          kind-card="tienda"
          @on-open-form="openForm"/>
      </v-flex>
      <v-flex xs6 sm4 class="overflowy">
        <cluster-card
        class="ma-2"
        :cluster-data="group"
        @on-edit-cluster="editCluster"
        v-for="(group, i) in groups"
        :key="i"/>
        <new-card
          class="ma-2"
          kind-card="sector"
          @on-open-form="openForm"/>
      </v-flex>
    </v-layout>
    <LocationForm
      :kind-form="openFormTrigger"
      :editData="editData"
      @on-close-dialog="onCloseLocationForm"
      @on-create-location="onCreateLocation"
      @on-create-cluster="onCreateCluster"
      @on-create-store="onCreateStore">
    </LocationForm>
  </div>
</template>

<script>
import PlaceCard from '../components/PlaceCard'
import LocationCard from '../components/LocationCard'
import ClusterCard from '../components/ClusterCard'
import NewCard from '../components/NewCard'
import LocationForm from '../components/LocationForm'

export default {
  name: 'Places',
  components: {
    PlaceCard, LocationCard, ClusterCard, NewCard, LocationForm
  },
  data () {
    return {
      editData: undefined,
      openFormTrigger: '',
      locations: [
        { position: {lat: -11.891670, lng: -77.044149}, address: 'AURB. ADLksdlka ASDLK 343', id: 'place 1', createdAt: '14/2/17' },
        { position: {lat: -11.885330, lng: -77.058117}, address: '234. ADLksdlka ASDLK 343', id: 'place 2', createdAt: '14/2/17' }
      ],
      stores: [
        { positions: [], name: 'Tienda 1', description: 'ABSDKJASJKDSD', coupons: 12, createdAt: '14/2/17' },
        { positions: [], name: 'Tienda 1', description: 'ABSDKJASJKDSD', coupons: 12, createdAt: '14/2/17' },
        { positions: [], name: 'Tienda 1', description: 'ABSDKJASJKDSD', coupons: 12, createdAt: '14/2/17' }
      ],
      groups: [
        { tiendas: [], name: 'Grupo A' },
        { tiendas: [], name: 'Grupo A' },
        { tiendas: [], name: 'Grupo A' }
      ]
    }
  },
  methods: {
    editCluster (clusterData) {
      this.openFormTrigger = 'sector'
      this.editData = clusterData
    },
    editStore (storeData) {
      this.openFormTrigger = 'tienda'
      this.editData = storeData
    },
    editLocation (storeLocation) {
      this.openFormTrigger = 'ubicacion'
      this.editData = storeLocation
    },
    openForm: function (kindForm) {
      // console.log('click places', kindForm)
      this.editData = undefined
      this.openFormTrigger = kindForm
    },
    onCloseLocationForm: function (closeValue) {
      this.openFormTrigger = ''
    },
    onCreateCluster: function (newCluster) {
      // console.log(newCluster)
      this.groups.push({
        name: newCluster.name,
        tiendas: newCluster.tiendas
      })
    },
    onCreateStore: function (newStore) {
      // console.log(newStore)
      this.stores.push({
        name: newStore.name,
        description: newStore.description,
        positions: newStore.positions
      })
    },
    onCreateLocation: function (newLocation) {
      // console.log(newLocation)
      this.locations.push({
        address: newLocation.address,
        position: newLocation.position
      })
    }

  }
}
</script>

<style lang="stylus">

// body, html
//   height: 100%

#places
  position relative
  overflow-x auto

.title-header
  font-size 18px
  font-weight bold
  position relative
  top 9px

.overflowy
  overflow-y auto
</style>
