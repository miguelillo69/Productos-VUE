<script>
import AppMenu from "./components/AppMenu.vue";
import AppTitle from "./components/AppTitle.vue";
import MensajesAlert from "./components/MensajesAlert.vue"
import { store } from "./store";

export default {
  components: {
    AppTitle,
    MensajesAlert,
    AppMenu,
  },
  mounted() {
    store.getCategories(),
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
    <router-view></router-view>
  </div>

</template>