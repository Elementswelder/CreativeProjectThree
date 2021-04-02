import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends.vue'
import Games from '../views/Games.vue'
import Launch from '../views/Launch.vue'
import About from '../views/About.vue'
import GameLaunch from '../views/GameLaunch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/Games',
    name: 'Games',
    component: Games
  },
  {
    path: '/Launch',
    name: 'Launch',
    component: Launch
  },
  {
    path: '/About',
    name: "About",
    component: About
  },
  {
    path: '/GameLaunch',
    name: "GameLaunch",
    component: GameLaunch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
