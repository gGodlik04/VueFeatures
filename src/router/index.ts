import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Timer from "../components/Timer.vue";
import Home from "../pages/Home.vue";
import SlotProps from "../pages/SlotProps.vue";
import ModelValueVue2Api from "../pages/ModelValueVue2Api.vue";
import ModelValueVue3Api from "../pages/ModelValueVue3Api.vue";

const routes = [
    {
        path: '/',
        name: 'app',
        component: Home,
    },
    {
        path: '/timer',
        name: 'timer',
        component: Timer
    },
    {
        path: '/slots',
        name: 'slots',
        component: SlotProps,
    },
    {
        path: '/modelvue2',
        name: 'ModelValueVue2',
        component: ModelValueVue2Api
    },
    {
        path: '/modelvue3',
        name: 'ModelValueVue3',
        component: ModelValueVue3Api
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;