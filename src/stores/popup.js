import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const usePopupStore = defineStore('popup', () => {
   const isPopupEnabled = ref(false)
   const popupType = ref(null)
   const route = useRoute()
   const router = useRouter()

   function showPopup(type = null) {
      isPopupEnabled.value = true
      popupType.value = type

      // Update query parameters
      router.replace({
         query: { ...route.query, popup: type },
         hash: route.hash,
      })
   }

   function hidePopup() {
      isPopupEnabled.value = false
      popupType.value = null

      // Remove 'popup' query param when closing
      const { popup, ...restQuery } = route.query
      router.replace({
         query: restQuery,
         hash: route.hash,
      })
   }

   // Watch for query parameter changes
   watch(
      () => route.query.popup,
      (popup) => {
         if (popup) {
            showPopup(popup)
         } else {
            hidePopup()
         }
      },
      { immediate: true },
   ) // Run immediately on page load

   return { isPopupEnabled, showPopup, hidePopup, popupType }
})
