import HomeMain from './components/HomeMain.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'
const routes = [
    {
        name:'HomeMain',
        component:HomeMain,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/LoginPage'
    },
    {
        name:'AddResto',
        component:AddResto,
        path:'/add'
    },
    {
        name:'UpdateResto',
        component:UpdateResto,
        path:'/update/:id',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
