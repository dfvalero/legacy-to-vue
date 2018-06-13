import Vue from 'vue';
import App from './app.vue';
import '../scss/app.scss';

Vue.filter('capitalize', str => str.charAt(0).toUpperCase() + str.slice(1));

new Vue({
    el: '#app',
    render: h => h(App)
});
