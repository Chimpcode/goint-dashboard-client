<template>
  <v-layout row wrap>
    <v-flex xs12 md5 offset-md3>
      <v-layout row wrap>
        <v-flex xs12>
          <h3>{{ isNew? 'Crear promocion': 'Editar promocion'}} <span class="green--text">&nbsp;{{infomessage}}</span></h3>
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
            v-model="postEdit.title"
            >
          </v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field
            name="cupones"
            label="Capacidad Cupones"
            single-line
            type="number"
            prepend-icon="local_activity"
            v-model.number="postEdit.stock"
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
            item-value="id"
            item-text="label"
            single-line
            bottom
          ></v-select>
        </v-flex>

        <v-flex xs12>
          <v-select
            v-model="postEdit.pseudotags"
            label="Agrega etiquetas"
            multiple
            tags
            chips
            :items="[]"
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
          <v-btn color="primary"
                 :disabled="isDisabledToCreate"
            @click.native.stop="createOrUpdatePost">
            {{ isNew ? 'CREAR' : 'EDITAR' }}
          </v-btn>
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
      isDisabledToCreate: false,
      infomessage: '',
      location_items: [
        { label: 'ZONA 1', id: '1' },
        { label: 'ZONA 2', id: '2' },
        { label: 'ZONA 3', id: '3' }
      ],
      timepicker_date: null,
      timepicker_menu: false
    }
  },
  methods: {
    createOrUpdatePost: function () {
      // test
      this.postEdit.tags = this.postEdit.pseudotags.join(',')
      this.isDisabledToCreate = true

      if (this.postEdit.createdAt === undefined) {
        this.postEdit.createdAt = '13/13/13'
      }
      console.log(this.postEdit.finishDate)
      console.log(new Date(this.postEdit.finishDate))
      let expireAt = new Date(this.postEdit.finishDate).getTime()
      console.log(expireAt)
      if (this.isNew) {
        let self = this
        this.$graphito.call_mutation('createPost',
          {
            description: self.postEdit.description,
            byId: 'cjbgrs3i101180189qwrhkjgj',
            title: self.postEdit.title,
            stock: self.postEdit.stock,
            tags: self.postEdit.tags,
            expireAt: expireAt,
            image: 'http://13.90.253.208:9300/api/v1/i/nombre'
          }
        ).then(res => {
          this.infomessage = 'Promocion creada'
          this.$emit('on-create-post', res.createPost)
          setTimeout(() => {
            self.isDisabledToCreate = false
          }, 4000)
          return true
        }, err => {
          console.log(err)
        })
      } else {
        let self = this
        // console.log(this.postEdit)
        // console.log(this.postObj)
        this.$graphito.call_mutation('updatePost',
          {
            id: self.postObj.id,
            description: self.postEdit.description,
            byId: 'cjbgrs3i101180189qwrhkjgj',
            title: self.postEdit.title,
            stock: self.postEdit.stock,
            expireAt: (new Date(self.postEdit.finishDate)).getMilliseconds(),
            tags: self.postEdit.tags
          }
        ).then(res => {
          this.infomessage = 'Promocion editada'
          this.$emit('on-edit-post', true)

          setTimeout(() => {
            self.isDisabledToCreate = false
          }, 4000)
          return true
        }, err => {
          console.log(err)
        })
      }
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
