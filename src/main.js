// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import wx from 'weixin-js-sdk'
import API from './components/untils/API.js'

Vue.use(MintUI);

Vue.config.productionTip = false
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
    }
  },
  methods: {
  },
  beforeCreate () {
  },
  created () {
  },
})
