import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopupStore = defineStore('popup', () => {
   const isPopupEnabled = ref(false)
   const popupType = ref(null)

   function showPopup(type = null) {
      isPopupEnabled.value = true
      popupType.value = type
   }

   function hidePopup() {
      isPopupEnabled.value = false
      popupType.value = null
   }

   return { isPopupEnabled, showPopup, hidePopup, popupType }
})
