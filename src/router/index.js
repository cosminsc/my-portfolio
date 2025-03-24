import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
   history: createWebHashHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
         meta: { title: 'Home' },
      },
      {
         path: '/history',
         name: 'history',
         component: HistoryView,
         meta: { title: 'History' },
      },
      {
         path: '/portfolio',
         name: 'Portfolio',
         component: PortfolioView,
         meta: { title: 'Portfolio' },
      },
      {
         path: '/contact',
         name: 'Contact',
         component: ContactView,
         meta: { title: 'Contact' },
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'NotFound',
         component: NotFoundView,
         meta: { title: 'Not Found' },
      },
      // {
      //    path: '/about',
      //    name: 'about',
      //    // route level code-splitting
      //    // this generates a separate chunk (About.[hash].js) for this route
      //    // which is lazy-loaded when the route is visited.
      //    component: () => import('../views/AboutView.vue'),
      // },
   ],
})

router.beforeEach((to, from, next) => {
   if (to.meta.title) {
      document.title = to.meta.title + ' - ' + 'Craftmin Studio'
   }
   next()
})

export default router
