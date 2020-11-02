import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);

Vue.use(Vuelidate);

Vue.filter("date", dateFilter);

Firebase.initializeApp({
  apiKey: "AIzaSyDHX2EkrU5aJj-oH4c3vpvGRAwZxH4Rth8",
  authDomain: "vue-crm-cf07d.firebaseapp.com",
  databaseURL: "https://vue-crm-cf07d.firebaseio.com",
  projectId: "vue-crm-cf07d",
  storageBucket: "vue-crm-cf07d.appspot.com",
  messagingSenderId: "23305249930",
  appId: "1:23305249930:web:2d1dfbf518d706590c7973",
  measurementId: "G-Z1Z8XYHC0Q"
});
let app;
Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
