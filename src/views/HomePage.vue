<template>
	<div>
		<nav-component></nav-component>

		<transition name="fade">
			<section class="hero is-fullheight-with-navbar" v-if="transition">
				<div class="hero-body">
					<transition name="move">
						<div v-show="showAbout">
							<about-component @showServices="showRight"></about-component>
						</div>
					</transition>

					<transition name="move">
						<div v-show="showServices">
					    	<services-component></services-component>
						</div>
					</transition>
				</div>
			</section>
		</transition>
	</div>
</template>

<script>
	import NavComponent from '../components/NavComponent.vue';
	import AboutComponent from '../components/AboutComponent.vue';
	import ServicesComponent from '../components/ServicesComponent.vue';

	export default {
		data(){
			return {
				showAbout: true,
				showServices: false,
				transition: false
			}
		},
		mounted() {
			this.transition = true;
	    },
		components: {
			NavComponent,
			AboutComponent,
			ServicesComponent
		},
		methods: {
			showRight(){
				this.showAbout = false;
				
				setTimeout(() => {
					this.showServices = true;
				},700)
			}
		}
	}
</script>