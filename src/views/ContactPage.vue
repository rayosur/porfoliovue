<template>
	<div>
		<nav-component></nav-component>

		<transition name="fade">
			<section class="hero is-fullheight-with-navbar" v-if="transition">
				<div class="hero-body">
					<div class="box container">
						<b-notification type="is-success" has-icon :active.sync="showSuccess">
							Enviado con Exito!
			        	</b-notification>
			        	<b-notification type="is-danger" has-icon :active.sync="showDanger">
			        		Ha ocurrido un error al enviar el correo :c
				        </b-notification>
						<p class="title is-3">Envíame un Email</p>
						<section>
							<b-field label="Nombre">
					            <b-input
					            	v-model="email.from_name"
					            	size="is-large"
					                type="text"
					                icon="account"
					            >
					            	
					            </b-input>
					        </b-field>
							<b-field label="Email">
					            <b-input
					            	v-model="email.from_email"
					            	size="is-large"
					                type="email"
					                icon="email">
					            </b-input>
					        </b-field>
					        <b-field label="Mensaje">
							    <b-input
							    	v-model="email.message" 
							    	type="textarea"
							        minlength="10"
							        placeholder="Escribe tu Mensaje">
							    </b-input>
							</b-field>

							<a @click.prevent="enviar" :class="`button is-primary is-active ${loading}`">Enviar</a>
						</section>
					</div>
				</div>
			</section>
		</transition>
	</div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';

export default {
	data(){
		return{
			transition: false,
			email: {
				from_name: '',
				from_email: '',
				message: ''
			},
			loading: '',
			showSuccess: false,
			showDanger: false
		}
	},
	created() {
		emailjs.init("user_aOlspdASnZg7pfeQrkJNA");
	},
	mounted(){
		this.transition = true;
    },
	components:{
		NavComponent
	},
	methods: {
		enviar(){
			this.loading = 'is-loading';
            
            emailjs.send("gmail","form-contacto", this.email)
            .then((response) => {
                if(response.text === 'OK'){
	                this.email = {
						from_name: '',
						from_email: '',
						message: ''
					}

	               	this.loading = '';
                }

               	this.showSuccess = true;
            },(err) => {

               	this.loading = '';

               	this.showDanger = true;
            });
		}
	}
}
</script>