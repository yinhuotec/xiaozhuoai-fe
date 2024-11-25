import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    //主页路由
    {
        path:"/",
        name:"Main",
        component:() => import("@/view/home/index.vue")
    },
    {
        path:"/login",
        name:"login",
        component:() => import("@/view/home/LoginView.vue"),
        redirect:"/conversation",
        children:[
            {
                path:"/conversation",
                name:"conversation",
                component:() => import("@/view/ConversationView.vue")
            },
            {
                path:"/search",
                name:"search",
                component:() => import("@/view/SearchView.vue")
            },
            {
                path:"/product",
                name:"product",
                component:() => import("@/view/ProductView.vue")
            },
        ]
    }

]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})   //创建一个实例 将上面的路由数组传进来

export default router //导出