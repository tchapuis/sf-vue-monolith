import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './view/App';


// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

const routes = [
   { path: '/home', component: App },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
   mode: 'history',
   routes // short for `routes: routes`
})

new Vue({
   render: h => h(App),
}).$mount('#app')
