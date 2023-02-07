import Vue from 'vue'
import VueRouter from 'vue-router'
//LAYOUT
const Main=()=>import('../views/layout/Main')
//VIEWS
const Login=()=>import('../views/Login')
const Index=()=>import('../views/Index')
const UserEdit=()=>import('../views/UserEdit')

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        component:Main,
        children: [
            {
                path:'',
                component:Index,
                name:"index",
            },
            {
                path:'/user/:id/edit',
                component:UserEdit,
                name:"user.edit",
            },
        ]
    },
    {
        path:'/login',
        component:Login,
        name:"login",
    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to,from,next)=>{
    next()
})
export default router
