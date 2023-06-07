import "primevue/resources/themes/lara-light-indigo/theme.css"; //разные темы primevue
import "primevue/resources/primevue.min.css"; //основные стили primevue
import 'primeicons/primeicons.css'; //иконки
import 'primeflex/primeflex.css'; //утилита чтобы верстать флексами

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app"
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyCP6rT_QdW9hn9H2offJ3GRkw8orjyGAA8",
    authDomain: "jwt-firebase-vue3-26b52.firebaseapp.com",
    projectId: "jwt-firebase-vue3-26b52",
    storageBucket: "jwt-firebase-vue3-26b52.appspot.com",
    messagingSenderId: "1026460296525",
    appId: "1:1026460296525:web:454a8baf2b7f7a6dc78304"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')


