<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      categories: store.state.categories
    };
  },
  computed: {

  },
  components: {
  },
};
</script>
<template>
  <div class="col-sm-6 col-md-4 col-lg-4 categoryList">
    <div class="listCategory">
      <h1>Listar categorías</h1>
      <fieldset>
        <legend class="bg-white text-dark fw-bold text-center"></legend>
        <table class="table table-striped table-hover table-responsive">
          <thead class="bg-dark">
            <tr class="text-white text-center">
              <th>Id</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  </div>
</template>
<style>
.categoryList {
  margin-left: 35%;
  margin-right:35%;
}
</style>
