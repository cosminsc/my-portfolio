import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { usePopupStore } from './stores/popup'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
   const popupStore = usePopupStore()
   const query = router.currentRoute.value.query

   if (query.popup) {
      popupStore.showPopup(query.popup)
   }

   app.mount('#app')
})
