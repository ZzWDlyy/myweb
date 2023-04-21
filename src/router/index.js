import Vue from 'vue'
import VueRouter from 'vue-router'
//router.js导入生成好的路由规则
import HomePage from '../views/HomePage.vue'
import TechnologyRealize from '../views/TechnologyRealize.vue'
import LogIn from '../views/LogIn.vue'
import IntroductionFunction from '../views/IntroductionFunction.vue'
import PlatForm from '../views/PlatForm.vue'
Vue.use(VueRouter)
const routes =[
        {
        path: "",  
        name: "home",
        component:HomePage,
        },
        {
        path: "/technology",
        name: "TechnologyRealize",
        component:TechnologyRealize,
        }, 
    
        {
        path: "/introduce",
        name: "introduce",
        component:IntroductionFunction,
        },
   
        {
        path: "/login",
        name: "LogIn",
        component:LogIn,

    },

    {
        path: "/platform",
        name: "PlatForm",
        component: PlatForm,
        meta:{
            isLogin: true
        }
        }
]
const router = new VueRouter({
    routes,
    mode: 'history' 
})
export default router
