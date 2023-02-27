import {
    RouteRecordRaw,
    _RouteRecordBase 
} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/Index.vue'), //.vue不能省略
        redirect:'indexpage',
        children: [
            {
                path: 'detiled',
                name: 'detiled',
                component: () => import('../pages/DetiledMessage.vue'), //.vue不能省略
            },
            {
                path: 'AdminPage',
                name: 'AdminPage',
                component: () => import('../pages/Admin/AdminPage.vue'), //.vue不能省略
            },
            {
                path: 'search',
                name: 'search',
                component: () => import('../pages/SearchMessage.vue'), //.vue不能省略
            },
            {
                path: 'indexpage',
                name: 'indexpage',
                component: () => import('../pages/IndexPage.vue'), //.vue不能省略
            }
          ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../pages/Admin/AdminPage.vue'), //.vue不能省略
    },
    {
        path: '/AdminIndex',
        name: 'AdminIndex',
        component: () => import('../pages/Admin/AdminIndex.vue'),
        redirect:'/AdminIndex/MainIndex',
        children:[
            {    
                path:'MainIndex',
                name:'MainIndex',
                component: () => import('../components/Admin/AdminMainIndex.vue'),
            },
            {    
                path:'AdminOne',
                name:'AdminOne',
                component: () => import('../components/Admin/AdminOne.vue'),
            },
            {    
                path:'AdminTwo',
                name:'AdminTwo',
                component: () => import('../components/Admin/AdminTwo.vue'),
            }
        ]
    },
]
export default routes
