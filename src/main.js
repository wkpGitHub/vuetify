import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import 'material-design-icons-iconfont'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify)


// 这是测试加入的子模块修改，父模块不提交子模块的修改记录

new Vue({
  store,

  created() {
    console.log('render fun')
  },

  router,
  render: h => h(App)
}).$mount('#app')
