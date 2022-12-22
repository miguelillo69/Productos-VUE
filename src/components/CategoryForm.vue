<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            category: {},
        };
    },
    props: {
        id: String,
    },

    methods: {
        addCategoty() {
            store.addCategoryStore(this.category)
            this.product = {}
            this.$router.push('/categorías')
        },

        async resetForm() {
                this.category = {}
        }
    },
    components: {

    },
    async mounted() {
        if (this.id) {
            this.product = await store.getProductStore(this.$route.params.id)
        }
    },
};
</script>
<template>
    <div class="col-sm-6 col-md-4 col-lg-4 addCategory">
        <div class="newCat">
            <h1>Añadir categoría</h1>
            <form id="new-cat" @submit.prevent="addCategoty" @reset.prevent="resetForm">
                <fieldset>
                    <legend class="bg-dark text-white text-center">Añadir categoría</legend>
                    <!-- Aquí los inputs y botones del form -->
                    <div class="form-group">
                        <label for="newcat-id">ID:</label>
                        <input type="text" class="form-control" v-model="category.id" disabled>
                    </div>
                    <div class="form-group">
                        <label for="newcat-name">Nombre:</label>
                        <input type="text" id="newcat-name" class="form-control" v-model="category.name">
                    </div>
                    <div class="form-group">
                        <label for="newcat-name">Descripcion:</label>
                        <textarea id="newcat-description" class="form-control" rows="6" v-model="category.description"></textarea>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-default btn-dark">Añadir</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>
<style>
.addCategory {
    margin-left: 35%;
    margin-right: 35%;
}
</style>