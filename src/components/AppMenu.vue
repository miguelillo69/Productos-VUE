<script>
export default {
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<template>
    <div class="menu">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<span class="navbar-brand" href="#">Almacén ACME</span>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link class="nav-link" to="/">Listar productos</router-link>
                    <router-link class="nav-link" to="/productform">Añadir producto</router-link>
                    <router-link class="nav-link" to="/categorías">Listar Categorías</router-link>
                    <router-link class="nav-link" to="/categoryForm">Añadir Categoría</router-link>
                    <router-link class="nav-link" to="/acercade">Acerca de...</router-link>

				</div>
			</div>
		</div>
	</nav>  
    </div>
</template>
<style>
.menu {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
</style>