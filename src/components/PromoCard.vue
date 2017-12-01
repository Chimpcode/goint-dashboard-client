<template>
  <v-card light>
    <div :class="[ 'image-content', color]">
        
    </div>
    <div class="info-content">
      <v-card-title primary-title>
      <div>
          <div class="created-at">{{promoData.createdAt}}</div>
          <h3 class="headline mb-0 mt-2">{{promoData.title}}</h3>
          <div>{{promoData.description}}
          </div>
      </div>
      </v-card-title>
      <v-card-actions class="roboto">
        <v-tooltip bottom>
            <v-btn flat color="primary" slot="activator">
            <v-icon>local_activity</v-icon> &nbsp; {{promoData.availableCoupons}}
            </v-btn>
            <span>Cupones restantes</span>
        </v-tooltip>
        <v-tooltip bottom>
            <v-btn flat color="primary" slot="activator">
            <v-icon>event</v-icon> &nbsp; {{promoData.finishDate}}
            </v-btn>
            <span>Fecha de Vencimiento</span>
        </v-tooltip>  
        <v-spacer/>
        <v-btn flat color="primary" @click.native.stop="onEditMode">EDITAR</v-btn>
            
        <v-dialog v-model="deleteDialog" max-width="500px">
          <v-btn flat color="primary" slot="activator">Eliminar</v-btn>
          <v-card>
            <v-card-title>
              Estas seguro que deseas eliminar esta promocion?
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" flat @click.stop="deletePost">Eliminar</v-btn>
              <v-btn color="" flat @click.stop="deleteDialog=false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PromoCard',
  props: {
    color: String,
    promoData: Object
  },
  data () {
    return {
      deleteDialog: false
    }
  },
  methods: {
    onEditMode: function () {
      this.$emit('on-edit-mode', true)
    },
    deletePost: function () {
    }
  }
}
</script>


<style lang="stylus">

.created-at
  font-size 9px
.info-content
  margin-left 200px
.image-content
  position absolute
  top 0px
  width 200px
  height 166.5px
  left 0px
</style>
