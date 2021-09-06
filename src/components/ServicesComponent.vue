<template>
	<div class="box">
		<div class="columns is-desktop">
			<div class="column">
				<service-component icon="laptop-code" title="Desarrollo Web" content="Hoy en día cualquier persona puede tener su propia Aplicación o Sitio Web. Te ofresco un Servicio De Calidad para que hagas parte de este Mundo."></service-component>
			</div>
			<div class="column">
				<service-component icon="cloud-upload-alt" title="Hosting" content="Mantengo tu Sitio en la Web para que cualquiera pueda ver lo que haz creado desde cualquier lugar y de manera rápida."></service-component>
			</div>
			<div class="column">
				<service-component icon="shopping-cart" title="E-commerce" content="El Comercio Electrónico es una pieza fundamental para los negocios. Te proveemos un buen servicio para que en poco Tiempo tengas tu Tienda en la Web."></service-component>
			</div>
		</div>
		<br>
		<div class="columns is-desktop">
			<div class="column">
				<article class="media">
					<figure class="media-left">
			        	<font-awesome-icon :icon="['fab', 'wordpress']" fixed-width :style="{ color: '#7957d5' }" size="4x"></font-awesome-icon>
					</figure>
					<div class="media-content">
						<div class="content">
							<p class="title is-4">Wordpress</p>
							<p class="subtitle is-5">Administra tu Sitio, Tienda o Blog con el CRM mas popular de la Web.</p>
						</div>
					</div>
				</article>
			</div>
			<div class="column">
				<service-component icon="mobile" title="Responsive Design" content="Una gran parte de los usuarios que visitan tu Sitio lo hacen desde un Télefono, no dejes que esto arruine su experiencia."></service-component>
			</div>
			<div class="column">
				<service-component icon="hourglass-end" title="Eficiencia" content="Me gusta entregar un Proyecto de Calidad y en un lapso de tiempo conveniente para el Cliente."></service-component>
			</div>
		</div>
	</div>
</template>

<script>
	import ServiceComponent from './ServiceComponent';
	export default {
		components: {
			ServiceComponent
		}
	}
</script>