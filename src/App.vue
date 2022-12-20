<script>
import AppMenu from "./components/AppMenu.vue";
//import ListarProducts from "./components/ListarProducts.vue";
//import ProductForm from "./components/ProductForm.vue";
import AppTitle from "./components/AppTitle.vue";
import MensajesAlert from "./components/MensajesAlert.vue"
import { store } from "./store";

export default {
  components: {
    //ProductForm,
    AppTitle,
    //ListarProducts,
    MensajesAlert,
    AppMenu,
  },
  mounted() {
    store.listarProductsInServer()
  }
}
</script>

<template>
  <div>
    <app-title title="Almacen central de productos - ACME SL"></app-title>
    <br>
    <app-menu></app-menu>
    <mensajes-alert></mensajes-alert>
    <br>
    <!--<listar-products></listar-products>
  <br>
  <product-form></product-form>-->
    <router-view></router-view>
  </div>

</template>