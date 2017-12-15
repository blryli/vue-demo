import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/frame/MainPage'
import Home from '@/views/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,	
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        { path: '/', name: '首页', component: Home },
        // { path: 'label', name: '退货换标', component: Label}
      ]
    }
  ]
})
