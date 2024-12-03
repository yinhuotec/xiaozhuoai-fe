import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    {
        path:"/",
        name:"main",
        component:() => import("@/view/layout/Layout.vue"),
        redirect:"/chat",
        children:[
            {
                path:"/chat",
                name:"chat",
                component:() => import("@/view/home/index.vue")
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
