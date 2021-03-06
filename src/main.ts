import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import Huo from './components/Huo.vue';
import Huo1 from './components/Huo1.vue'
import {createWebHashHistory, createRouter}
from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Huo},
    {path:'/xx',component:Huo1}
  ]
});

const app = createApp(App);
app.use(router)
app.mount('#app');
