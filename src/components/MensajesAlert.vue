<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      errors: store.state.errors
    };
  },
  methods: {
  borrarErrors(index){
    this.errors.splice(index,1);
  }
  }
};
</script>
<template>
<div>
    <div v-for="(error, index) in errors" :key="index" class="alert alert-danger alert-dismissible" role="alert">
        {{error}}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
        onclick="this.parentElement.remove()"></button>
    </div>
    </div>
</template>