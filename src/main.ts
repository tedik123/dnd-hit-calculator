import "primevue/resources/themes/lara-dark-purple/theme.css"
import "primeflex/primeflex.css"
import 'primeicons/primeicons.css';

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputNumber', InputNumber);
app.component('Dropdown', Dropdown);

app.mount('#app')
