import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      meta: { title: '路由' },
      component: function (resolve) {
        require(['@/pages/Home'], resolve)
      }
    },
    {
      path: '*',
      name: '*',
      meta: { title: '路由' },
      component: function (resolve) {
        require(['@/pages/Home'], resolve)
      }
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      meta: { title: '条形码 / 二维码', inmap: '1' },
      component: function (resolve) {
        require(['@/pages/WelinkQrcode'], resolve)
      }
    }
  ]
})
