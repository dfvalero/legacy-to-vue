import Vue from 'vue';
import App from './app.vue';
import store from './store/store';
import '../scss/app.scss';

Vue.filter('capitalize', str => str.charAt(0).toUpperCase() + str.slice(1));

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
