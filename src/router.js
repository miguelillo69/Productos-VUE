
import { createRouter, createWebHistory } from 'vue-router'
import ListarProducts from "./components/ListarProducts.vue";
import ProductForm from "./components/ProductForm.vue";
import ListarCategories from "./components/ListarCategories.vue"
import CategoryForm from "./components/CategoryForm.vue"
import AcercaDe from "./components/AcercaDe.vue"
import CompNotFound from './components/CompNotFound.vue'
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
  {
    path: '/edit/:id',
    name: 'EditForm',
    component: ProductForm,
    props: true
  },
  {
    path: '/categorías',
    name: 'ListarCategories',
    component: ListarCategories
  },
  {
    path: '/categoryForm',
    name: 'CategoryForm',
    component: CategoryForm
  },
  {
    path: '/acercade',
    name: 'AcercaDe',
    component: AcercaDe
  },
  {
    path: '/not-found',
    name: '404',
    component: CompNotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: '404',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
