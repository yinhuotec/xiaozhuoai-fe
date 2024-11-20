import { createWebHashHistory, createRouter } from 'vue-router'

const routes= [
    // 主页路由
    {
        path:"/",
        name:"Home",
        component:()=>import("@/view/home/index.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
