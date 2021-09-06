import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './views/HomePage.vue';
import ProyectosPage from './views/ProyectosPage.vue'
import ContactPage from './views/ContactPage.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/proyectos',
		name: 'ProyectosPage',
		component: ProyectosPage,
	},
	{
		path: '/contacto',
		name: 'ContactPage',
		component: ContactPage,
	},
  ],
});
