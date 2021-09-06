import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
	faAngleRight,
	faAngleDown,
	faLaptopCode,
	faCloudUploadAlt,
	faShoppingCart,
	faBlog,
	faMobile,
	faHourglassEnd,
	faUsersCog,
	faSmileBeam,
} from '@fortawesome/free-solid-svg-icons';
import { 
	faGithub,
	faTwitter,
	faLinkedin,
	faWordpress
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(
	faAngleRight,
	faAngleDown,
	faLaptopCode,
	faCloudUploadAlt,
	faShoppingCart,
	faBlog,faMobile,
	faHourglassEnd,
	faUsersCog,
	faSmileBeam,
	faGithub,
	faTwitter,
	faLinkedin,
	faWordpress
);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
