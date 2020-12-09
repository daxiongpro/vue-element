import Vue from 'vue'
import ElementUI from 'element-ui'
// import '../theme/index.css'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerMap from './router'
Vue.use(VueRouter);
Vue.use(ElementUI);

// import vueMiniPlayer from 'vue-mini-player'
// import 'vue-mini-player/lib/vue-mini-player.css'
// Vue.use(vueMiniPlayer)

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)


const router = new VueRouter({routes: routerMap})

const app = new Vue({
  router
}).$mount('#app');
