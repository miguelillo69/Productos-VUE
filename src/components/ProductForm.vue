<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            product: {
                nombre:'',
                uds:'',
                precio:''
            }
        };
    },
    methods: {
        addProduct() {
            store.addProductStore(this.product)
            this.product = ''
        }

    },
    components: {

    },
};
</script>
<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="newProduct">
                <h1 id="añadirProducto">Añadir producto</h1>
                <form id="new-prod" @submit.prevent="addProduct" novalidate>
                    <fieldset>
                        <legend class="bg-dark text-white text-center" id="tabla_prod">Añadir producto</legend>
                        <!-- Aquí los inputs y botones del form -->
                        <div class="form-group">
                            <label for="newprod-id">ID:</label>
                            <input type="text" id="newprod_id" class="form-control" disabled>
                        </div>
                        <div class="form-group">
                            <label for="newprod-name">Nombre:
                                <input type="text" v-model="product.nombre" id="newprod-name" class="form-control" required minlength="5"
                                    maxlength="50">
                                <span class="error"></span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="newprod-units">Unidades.:</label>
                            <input type="number" v-model="product.uds" id="newprod-units" class="form-control" min="0" max="100">
                            <span class="error"></span>
                        </div>
                        <div class="form-group">
                            <label for="newprod-price">Precio/u.:</label>
                            <input type="number" v-model="product.precio" id="newprod-price" class="form-control" min="0" step="0.01" required>
                            <span class="error"></span>
                        </div>
                        <br>
                        <button type="submit" id="boton_añadir_modificar"
                            class="btn btn-default btn-dark">Añadir</button>
                        <button type="reset" class="btn btn-danger" id="resetProduct">Reset</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>

</template>
<style>

.newProduct {
 margin-left: 20%;
}
</style>