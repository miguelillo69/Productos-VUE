<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      product: {
        nombre: "",
        uds: "",
        precio: "",
      },
      categories: store.state.categories,
    };
  },
  props: {
    id: String,
  },

  watch: {
    $route() {
      this.product = {};
    }
},
methods: {
  addProduct() {
    if (!this.id) {
      store.addProductStore(this.product);
      this.product = {};
      this.$router.push("/");
    } else {
      store.editProductStore(this.product);
      this.product = {};
      this.$router.push("/");
    }
  },

    async resetForm() {
    if (!this.id) {
      this.product = {};
    } else {
      this.product = await store.getProductStore(this.$route.params.id);
    }
  },
},
components: { },
  async mounted() {
  if (this.id) {
    this.product = await store.getProductStore(this.$route.params.id);
  }
},
};
</script>
<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4 addProduct">
      <div class="newProduct">
        <h1 id="añadirProducto">{{ this.id ? "Modificar " : "Añadir " }}producto</h1>
        <form id="new-prod" @submit.prevent="addProduct" @reset.prevent="resetForm" novalidate>
          <fieldset>
            <legend class="bg-dark text-white text-center" id="tabla_prod">
              {{ this.id ? "Modificar " : "Añadir " }} producto
            </legend>
            <!-- Aquí los inputs y botones del form -->
            <div class="form-group">
              <label for="newprod-id">ID:</label>
              <input type="text" id="newprod_id" v-bind:value="product.id" class="form-control" disabled />
            </div>
            <div class="form-group">
              <label for="newprod-name">Nombre:
                <input type="text" v-model="product.nombre" id="newprod-name" class="form-control" required
                  minlength="5" maxlength="50" />
                <span class="error"></span>
              </label>
            </div>
            <div class="form-group">
              <label for="newprod-name">Categoría:
                <select class="form-control" v-model="product.category">
                  <option value="undefined">--- Selecciona categoría ---</option>
                  <option v-bind:value="category.id" v-for="category in categories" :key="category.id">
                    {{ category.name }}
                  </option>
                </select>
                <span class="error"></span>
              </label>
            </div>
            <div class="form-group">
              <label for="newprod-units">Unidades.:</label>
              <input type="number" v-model="product.uds" id="newprod-units" class="form-control" min="0" max="100" />
              <span class="error"></span>
            </div>
            <div class="form-group">
              <label for="newprod-price">Precio/u.:</label>
              <input type="number" v-model="product.precio" id="newprod-price" class="form-control" min="0" step="0.01"
                required />
              <span class="error"></span>
            </div>
            <br />
            <button type="submit" id="boton_añadir_modificar" class="btn btn-default btn-dark">
              {{ this.id ? "Modificar " : "Añadir " }}
            </button>
            <button type="reset" class="btn btn-danger" id="resetProduct">Reset</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.addProduct {
  margin-left: 35%;
  margin-right: 35%;
}
</style>
