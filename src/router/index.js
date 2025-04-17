import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Sistema from '@/pages/Sistema.vue'
import Contato from '@/pages/Contato.vue'
import Relatorios from '@/pages/Relatorios.vue'
import Mapa from '@/pages/Mapa.vue'
import Fotos from '@/pages/Fotos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/sistema', component: Sistema },
  { path: '/contato', component: Contato },
  { path: '/relatorios', component: Relatorios },
  { path: '/mapa', component: Mapa },
  { path: '/fotos', component: Fotos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
