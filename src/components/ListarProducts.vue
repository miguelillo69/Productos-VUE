<script>
import ProductoItem from "./ProductoItem.vue";
import { store } from "../store.js";
export default {
  data() {
    return {
      products: store.state.products
    };
  },
  computed: {
    productImport() {
      var total = 0;
      this.products.forEach((product) => {
        total += product.uds * product.precio
      })
      return total.toFixed(2);
    },

    totalProducts() {
      return this.products.length
    }
  },
  components: {
    ProductoItem,
  },
};
</script>
<template>
  <div class="container">
    <div class="tablaProduct">
      <header>
        <h3 style="text-align:left">Listado de productos</h3>
      </header>

      <!-- Zona para mostrar mensajes al usuario -->
      <div class="row" id="messages">

      </div>

      <!-- Almacén de productos -->
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">

          <table class="table table-striped table-hover table-responsive">
            <thead class="bg-dark">
              <tr class="text-white text-center">
                <th>Id</th>
                <th>Nombre</th>
                <th>Uds.</th>
                <th>Precio/u</th>
                <th>Importe</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <producto-item v-for="item in products" :key="item.id" :product="item">
              </producto-item>
            </tbody>
            <tfoot id="tfoot">
              <th colspan="4">Productos: {{ totalProducts }}</th>
              <th colspan="1">Importe total del almacén: &nbsp; {{ productImport }} €</th>
              <th id="total-import"></th>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
