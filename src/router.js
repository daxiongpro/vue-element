// the config of app router

import TestManagement from './components/testManagement/TestManagement.vue';
import UserGroup from './components/userGroup/UserGroup.vue';
import Help from './components/help/Help.vue';
import Feedback from './components/feedback/Feedback.vue';
import UserList from './components/user/UserList.vue';
import App from './App.vue';
import ProductsManagement from "./components/products/ProductsManagement.vue";

import VideoPlayer from "./components/products/VideoPlayer.vue";
import VueRouter from "vue-router";


const routerMap = [{
    path: '/index',
    component: App,
    children: [
        {
            name: '测试管理',
            path: 'testManagement',
            component: TestManagement
        },
        {
            name: '用户分群管理',
            path: 'userGroup',
            component: UserGroup
        },
        {
            name: '用户管理',
            path: 'userList',
            component: UserList
        },
        {
            name: '帮助中心',
            path: 'help',
            component: Help
        },
        {
            name: '意见反馈',
            path: 'feedback',
            component: Feedback
        },
        {name: '产品一', path: 'product1', component: ProductsManagement},
        {name: '产品二', path: 'product2', component: ProductsManagement},
        {name: '产品三', path: 'product3', component: VideoPlayer},
    ]
},
    {
        path: '*',
        redirect: '/index/userGroup'
    }
]


import product_list from "./mock/productsList.js";
// const routers = []
for(let i in product_list)
{
    const Obj = {
        name:product_list[i].name,
        path:'product' + product_list[i].id,
        components: VideoPlayer
    }
    routerMap[0].children.push(Obj);

}
console.log(routerMap[0])

const router = new VueRouter({routes: routerMap})
// const router = new VueRouter()

// router.addRoutes(routers)

export default router