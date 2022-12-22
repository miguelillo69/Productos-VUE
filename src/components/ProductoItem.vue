<script>
import { store } from "../store";

export default {
    data() {
        return {
            categories: store.state.categories
        };
    },
    props: {
        product: Object
    },
    methods: {
        subirUnds() {
            store.subirUndsStore(this.product);
        },
        bajarUnds() {
            store.bajarUndsStore(this.product)
        },
        borrarProduct() {
            store.delProductStore(this.product)
        },
        editarProduct() {
            store.editProductStore(this.product);
        },
        mostrarCategory(categoria) {
            var nameCategory = ''
            this.categories.forEach((category) => {
                if (category.id === categoria) {
                    nameCategory = category.name;
                }
            })

            return nameCategory;
        }
    }

}
</script>
<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.nombre }}</td>
        <td>{{ mostrarCategory(product.category) }}</td>
        <td>{{ product.uds }}</td>
        <td>{{ product.precio }} €/u</td>
        <td>{{ (product.uds * product.precio).toFixed(2) }} €</td>
        <td><button class="btn btn-outline-dark" @click="subirUnds(product)"><span
                    class="bi bi-arrow-up-circle-fill"></span></button>
            <button class="btn btn-outline-dark" v-if="product.uds < 1" disabled @click="bajarUnds(product)"><span
                    class="bi bi-arrow-down-circle-fill"></span></button>
            <button class="btn btn-outline-dark" v-else @click="bajarUnds(product)"><span
                    class="bi bi-arrow-down-circle-fill"></span></button>
            <button class=" btn btn-outline-success" @click="$router.push('/edit/' + product.id)"><span
                    class="bi bi-pencil-fill editar"></span></button>
            <button class=" btn btn-outline-danger" v-if="product.uds != 0" disabled
                @click="borrarProduct(product)"><span class="bi bi-trash3-fill"></span></button>
            <button class=" btn btn-outline-danger" v-else @click="borrarProduct(product)"><span
                    class="bi bi-trash3-fill"></span></button>
        </td>
    </tr>
</template>
<style>
tr {
    text-align: center;
}
</style>