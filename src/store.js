import axios from "axios";
import { reactive } from "vue";
const url = 'http://localhost:3000'

export const store = {
    debug: true,
    state: reactive({
        products: [],
        errors: [],
        categories: []
    }),

    async listarProductsInServer() {
        try {
            var response = await axios.get(url + "/products")
            response.data.forEach((product) => { this.state.products.push(product) })
        } catch (error) {
            this.addError('Error: no se ha mostrado los registros. ' + error);
        }
    },

    productImportStore() {
        var total = 0;
        this.state.products.forEach((product) => {
            total += product.uds * product.precio
        })
        return total;
    },

    async subirUndsStore(product) {
        try {
            await axios.patch(url + "/products/" + product.id, {
                uds: product.uds + 1
            })
            product.uds++

        } catch (error) {
            this.addError('Error: no se ha subido la unidad. ' + error);
        }
    },

    async bajarUndsStore(product) {
        try {
            var response = await axios.patch(url + "/products/" + product.id, {
                uds: product.uds - 1
            })
            product.uds--

        } catch (error) {
            this.addError('Error: no se ha bajado la unidad. ' + response.message);
        }
    },

    async delProductStore(product) {
        try {
            var response = await axios.delete(url + "/products/" + product.id)
            let position = this.state.products.findIndex((element) => element.id === product.id);
            this.state.products.splice(position, 1);
        } catch (error) {
            this.addError('Error: no se ha borrado el producto. ' + response.message);
        }
    },

    async addProductStore(product) {
        try {
            var response = await axios.post(url + "/products", product)
            this.state.products.push(
                response.data
            )

        } catch (error) {
            this.addError('Error: no se ha añadido el producto. ' + response.message);
            throw error
        }

    },

    async editProductStore(product) {
        try {
            var response = await axios.patch(url + "/products/" + product.id, {
                nombre: product.nombre,
                uds: product.uds,
                precio: product.precio,
                category: product.category
            })
            let position = this.state.products.findIndex((element) => element.id === product.id);
            this.state.products.splice(position, 1,response.data);
        } catch (error) {
            this.addError('Error: no se ha editado el producto. ' + response.message);
        }
    },

    async getProductStore(id) {
        try {
            var response = await axios.get(url + "/products/" + id)
            return response.data;
        } catch (error) {
            this.addError('Error: no se ha mostrado el registro. ' + error);
            return {}
        }
    },

    async getCategories() {
        try {
            var response = await axios.get(url + "/categories")
            response.data.forEach((category) => { this.state.categories.push(category) })

        } catch(error) {
            this.addError('Error: no se ha listado las categorías. ' + error);
        }
    },

    async addCategoryStore(category) {
        try {
            var response = await axios.post(url + "/categories", category)
            this.state.categories.push(
                response.data
            )

        } catch (error) {
            this.addError('Error: no se ha añadido la categoría. ' + response.message);
        }
    },

    addError(error) {
        this.state.errors.push(error)
    }

}
