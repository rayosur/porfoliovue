<template>
	<div class="columns">
		<div class="column is-narrow">
			<figure class="media-left">
				<p class="image is-128x128">
					<img class="is-rounded" src="../assets/avatar.jpg">
				</p>
			</figure>
		</div>
		<div class="column">
			<div class="box">
				<p class="title is-3">Daniel González</p>
				<p class="subtitle is-4">Desarrollador Web Full-Stack</p>
				<div class="content is-medium">
					<p>Soy un Estudiante de <a href="https://www.salesianos.edu/don-bosco-f5-sera-la-primera-escuela-digital-inclusiva-en-andalucia/" target="_blank">Donbosco F5</a> con mútiples conocimientos en diferentes areas y <strong>Tecnologías Modernas</strong> como lo son <strong>Vue, Laravel, Bootstrap, Xamp y GitHub</strong> por nombrar algunas. Me gusta Complacer las necesidades del Cliente, que vea su producto en funcionamiento y cumpliendo sus <strong>necesidades</strong>.</p>
				</div>
				<div class="content is-large">
					<p>¿Que puedo Ofrecerte?</p>
				</div>
				<a class="navbar-item" @click.prevent="showServices">
					<strong>Conoce mi Forma de Trabajar</strong>
					<br>
					<font-awesome-icon :icon="['fas', 'angle-right']" size="4x" ></font-awesome-icon>
		        </a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			showServices() {
				this.$emit('showServices');
			}
		}
	}
</script>