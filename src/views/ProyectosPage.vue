<template>
	<div>
		<nav-component></nav-component>

		<transition name="fade">
			<section class="hero is-medium" v-if="transition">
				<div class="hero-body">
					<div class="box container has-text-centered">
						<p class="title is-5">MIS PROYECTOS</p>
						<br>
						<p class="subtitle is-5">Por si no estás Seguro puedes ver mi Trabajo. <strong>Explora un poco hacia abajo <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon> y verás mi Potencial.</strong></p>
						<p class="subtitle is-5">Puedes ver el Código de este Portafolio en mi cuenta de <a href="https://github.com/rayosur" target="_blank">
							GitHub <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
						</a></p>
					</div>
				</div>
			</section>
		</transition>

		<div class="container" id="proyectos">
			
			<section class="box columns is-desktop" id="blog">
				<div class="column">
					<p @click="image('blog')" class="image is-quarter">
						<img src="/assets/proyectos/blog-1.png">
					</p>
				</div>
				<div class="column">
					<a href="https://www.vvtutorial.es/" target="_blank" class="hover title is-4">Blog | Personal
					</a>
					<article>
						<p style="margin-top: 10px;" class="subtitle is-4">
							Este es un Proyecto desarrollado con Wordpress con la plantilla Divi. 
						</p>
						<p style="margin-top: 10px;" class="subtitle is-5">
							Es mi blog personal <strong>Donde subo tutoriales de informática</strong> donde todos podemos aprender.
						</p>
						<p style="margin-top: 10px;" class="subtitle is-5">
						
						</p>
					</article>
				</div>
			</section>

<!-- 			<section class="box columns is-desktop" id="ecommerce">
				<div class="column">
					<p @click="image('ecommerce')" class="image is-quarter">
						<img src="/assets/home-hero.jpg">
					</p>
				</div>
				<div class="column">
					<a href="" target="_blank" class="hover title is-4">E-commerce | Personal
					</a>
					<a href="" target="_blank" class="hover">
						<font-awesome-icon :icon="['fab', 'github']" fixed-width :style="{ color: 'black' }" size="2x"></font-awesome-icon>
					</a>
					<article>
						<p style="margin-top: 10px;" class="subtitle is-4">
							Proyecto no enfocado en el Diseño ya que está desarrollado para demostrar mis conocimientos en diferentes areas como lo son:
						</p>
						<p class="subtitle is-5">
							Manejo profesional de Vuejs junto con Laravel, creación de Restfull Api's, Estructuración de Bases de Datos, Sistema de Permisos de Usuarios, JWT, Sistemas de Comentarios y mucho más.
						</p>
						<p style="margin-top: 10px;" class="subtitle is-5">
							Si desea Navegar libremente como un usuario Administrador ingrese con las siguientes credenciales:
						</p>
						<p style="margin-top: 10px;" class="subtitle is-5">
							<strong>Email:</strong> teppa@gmail.com
							<strong>Contraseña:</strong> teppa1234
						</p>
					</article>
				</div>
			</section> -->

			<section class="box columns is-desktop" id="catalogo">
				<div class="column">
					<p @click="image('catalogo')" class="image is-quarter">
						<img src="/assets/proyectos/catalogo-1.png">
					</p>
				</div>
				<div class="column">
					<a href="" target="_blank" class="hover title is-4">Portal | Estudiantes
					</a>
					<article>
						<p style="margin-top: 10px;" class="subtitle is-4">
							Un proyecto Excelente en cuanto laravel y vuejs. Es un proyecto el cual recogemos
							de la base de datos los estudiantes con dos campos nombre y email.
						</p>
						<p style="margin-top: 10px;" class="subtitle is-5">
							Contiene un buen Sistema de Filtrado por id. el cual se pede agregar,editar y borrar. 
						</p>
					</article>
				</div>
			</section>

		</div>

	</div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';

export default {
	data(){
		return{
			transition: false,
		}
	},
	mounted(){
		this.transition = true;
    },
	components:{
		NavComponent
	},
	methods: {
		image(p) {
			switch(p){
				case 'blog':
					this.$modal.open(`
						<p class="image">
							<img src="/assets/proyectos/blog-1.png">
						</p>
					`);
					break;
				case 'ecommerce':
					this.$modal.open(`
						<p class="image">
							<img src="/assets/proyectos/blog-2.png">
						</p>
					`);
					break;
				case 'catalogo':
					this.$modal.open(`
						<p class="image">
							<img src="/assets/proyectos/catalogo-1.png">
						</p>
					`);
					break;
			}
		}
	}
}
</script>

<style scoped>
	.hover:hover {
		cursor: pointer;
		color: #7957d5;
	}
	.image {
		border: solid 3px #7957d5;
	}
	.image:hover{
		cursor: pointer;
	}
	#proyectos {
		padding-bottom: 3%;
	}
</style>