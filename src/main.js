import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n';

import store from './store'; // Importe o store aqui

Vue.config.productionTip = false

Vue.use(VueI18n);

const messages = {
	'pt-BR': require('@/i18n/pt-BR.json')
};

const i18n = new VueI18n({
	locale: 'pt-BR', // Defina o idioma padrão
	messages
});

new Vue({
	i18n,
	vuetify,
	render: h => h(App),
	store, // Adicione o store à instância Vue
}).$mount('#app')
