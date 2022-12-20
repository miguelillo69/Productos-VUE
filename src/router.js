
import { createRouter, createWebHistory } from 'vue-router'
import ListarProducts from "./components/ListarProducts.vue";
import ProductForm from "./components/ProductForm.vue";
const routes = [
  {
    path: '/',
    name: 'ListarProducts',
    component: ListarProducts
  },
  {
    path: '/productform',
    name: 'ProductForm',
    component: ProductForm
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
