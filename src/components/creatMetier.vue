

<template>
  <div class="bg-secondary">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-12">

          <form id="form" @submit.prevent="postData" class="p-3 m-3">

            <div class="form-group p-3 m-3 bg-warning" v-if="err">
              {{ err }}
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="hidden" v-model="metier.id" required>
            </div>

            <div class="form-group p-3 m-3">
              <input id="wc-input" type="color" v-model="metier.color" required />
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="text" id="title" v-model="metier.title" placeholder="Nom du produit" required>
            </div>

            <div class="form-group p-3 m-3">
              <img width="100" :src="FILE && URL.createObjectURL(FILE)" height="100" id="blash" />
            </div>

            <div class="form-group p-3 m-3">
              <textarea class="form-control form-control-lg" v-model="metier.description" placeholder="Description du produit" required></textarea>
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="text" v-model="metier.profession" placeholder="Mode d'action du produit" required>
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="text" v-model="metier.filename" placeholder="Nom du fichier" required>
            </div>

            <div class="form-select form-select-sm p-3 m-3" aria-label=".form-select-sm">
              <label for="sexe">Sexe :</label>
              <select v-model="metier.sexe" class="form-control form-control-lg" required>
                <option value="feminin">F</option>
                <option value="masculin">M</option>
              </select>
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="file" @change="onFileUpload" name="file" id="file" required>
            </div>

            <div>
              <input class="form-control form-control-lg" type="hidden" v-model="metier.imageUrl" required>
            </div>

            <div class="form-group p-3 m-3">
              <input type="hidden" v-model="metier.userId">
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="text" name="price" v-model="metier.price" placeholder="Prix du produit" required>
            </div>

            <div class="form-group p-3 m-3">
              <input class="form-control form-control-lg" type="text" name="normalPrice" v-model="metier.normalPrice" placeholder="Prix barré" required>
            </div>

            <div class="form-group p-3 m-3">
              <button type="submit" class="btn btn-primary">Ajouter</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metierService } from '@/_services'

export default {
  name: 'creatMetier',
  data() {
    return {
      metier: {
        id: '',
        title: '',
        color: '',
        description: '',
        profession: '',
        userId: '',
        imageUrl: '',
        filename: '',
        sexe: '',
        price: '',
        normalPrice: ''
      },
      err: '',
      FILE: null,
    }
  },
  methods: {
    onFileUpload(event) {
      this.FILE = event.target.files[0]
    },

    postData() {
      if (!this.FILE) {
        this.err = "Aucun fichier sélectionné."
        return
      }

      const formData = new FormData()
      const metierData = JSON.stringify(this.metier)

      formData.append('metier', metierData)
      formData.append('image', this.FILE, this.FILE.name)

      metierService.addThing(formData, {}, this.metier)
        .then(res => {
          if (res.status === 201) {
            this.$router.push('/info')
          }
        })
        .catch(err => {
          this.err = err.response?.data?.error?.message || 'Erreur inconnue.'
        })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
