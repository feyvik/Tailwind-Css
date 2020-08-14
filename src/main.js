import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";
import "firebase/firestore";

import "./assets/css/tailwind.css";

const firebaseConfig = {
  apiKey: "AIzaSyBbDfUDchLFGeIzXbU9kVZSz1aAOnKoE3U",
  authDomain: "invoicing-app-b172d.firebaseapp.com",
  databaseURL: "https://invoicing-app-b172d.firebaseio.com",
  projectId: "invoicing-app-b172d",
  storageBucket: "invoicing-app-b172d.appspot.com",
  messagingSenderId: "145820741700",
  appId: "1:145820741700:web:043f2495e451cf0b560c11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
