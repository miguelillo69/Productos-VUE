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
					<!--<a class="nav-link active" id="buttonProductos" aria-current="page" href="#">Productos</a>-->
					<!--<a class="nav-link" id="buttonCategorias" href="#">Categorías</a>-->
					<router-link class="nav-link" to="/">Listar productos</router-link>
                    <router-link class="nav-link" to="/productform">Añadir producto</router-link>
                    <!--<a  id="buttonAñadirProducto" href="#"></a>-->
					<!--<a class="nav-link" id="buttonAñadirCategoria" href="#">Añadir categoría</a>-->
					<!--<a class="nav-link" id="buttonSobreNosotros" href="#">Sobre nosotros</a>-->
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