import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/bangdan/hot"  

  },{
    path: '/bangdan',
    component: () => import('../views/bangdan'),
    children:[
      {path:"/bangdan/:id",
      name:"hot",
       component: () => import('../views/hot')},
   
  
    ]
  },
  {
    path: '/oumei',
    component: () => import('../views/oumei')
  },
  {
    path: '/dalu',
    component: () => import('../views/dalu')
  },{
    path:'/detail/:id',
    name:"detail",
    component: () => import('../views/detail')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
