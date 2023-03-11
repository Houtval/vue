import {
    RouteRecordRaw,
    _RouteRecordBase
} from 'vue-router'
import { ElMessage } from 'element-plus'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/Index.vue'), //.vue不能省略
        redirect: 'indexpage',
        children: [
            {

                path: 'AllSildeMessage',
                name: 'AllSildeMessage',
                component: () => import('../pages/AllMessage/AllSildeMessage.vue'), //.vue不能省略
            },
            {

                path: 'AllHingeMessage',
                name: 'AllHingeMessage',
                component: () => import('../pages/AllMessage/AllHingeMessage.vue'), //.vue不能省略
            },
            {

                path: 'SearchSildeMessage',
                name: 'SearchSildeMessage',
                component: () => import('../pages/SearchMessage/SearchSildeMessage.vue'), //.vue不能省略
            },
            {

                path: 'SearchHingeMessage',
                name: 'SearchHingeMessage',
                component: () => import('../pages/SearchMessage/SearchHingeMessage.vue'), //.vue不能省略
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
                props: true
            },
            {
                path: 'indexpage',
                name: 'indexpage',
                component: () => import('../pages/IndexPage.vue'), //.vue不能省略
                redirect: '/indexpage/hingeall',
                children: [
                    {
                        path: 'hingeall',
                        name: 'hingeall',
                        component: () => import('../components/classifywindow/HingeAll.vue'),
                    },
                    {
                        path: 'slideall',
                        name: 'slideall',
                        component: () => import('../components/classifywindow/SildeAll.vue'),
                    },
                ]
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
        redirect: '/AdminIndex/MainIndex',
        beforeEnter: (to, form, next) => {
            if (!localStorage.getItem('id')?.toString()) {
                ElMessage({
                    message: "未登录，请先登录",
                    type: 'error',
                })
                next('/admin');
            } else {
                next();
            }
        },
        children: [
            {
                path: 'MainIndex',
                name: 'MainIndex',
                component: () => import('../components/Admin/AdminMainIndex.vue'),
            },
            {
                path: 'Carousel1',
                name: 'Carousel1',
                component: () => import('../components/Admin/AdminCarousel1.vue'),
            },
            {
                path: 'Carousel2',
                name: 'Carousel2',
                component: () => import('../components/Admin/AdminCarousel2.vue'),
            },


            {
                path: 'Hinge',
                name: 'Hinge',
                component: () => import('../components/Admin/Hinge.vue'),
            },
            {
                path: 'Slide',
                name: 'Slide',
                component: () => import('../components/Admin/Slide.vue'),
            },
            {
                path: 'UpdateAdmin',
                name: 'UpdateAdmin',
                component: () => import('../components/Admin/UpdateAdmin.vue'),
            },
            {
                path: 'HingeImage',
                name: 'HingeImage',
                component: () => import('../components/Admin/HingeImage.vue'),
            },
            {
                path: 'SlideImage',
                name: 'SlideImage',
                component: () => import('../components/Admin/SlideImage.vue'),
            }
        ]
    },
]
export default routes
