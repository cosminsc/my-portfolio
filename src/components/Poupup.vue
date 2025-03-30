<script setup>
import { usePopupStore } from '@/stores/popup'
import { IconCheck, IconX } from '@tabler/icons-vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const popupStore = usePopupStore()
const { isPopupEnabled, popupType } = storeToRefs(popupStore)

watch(isPopupEnabled, (newVal) => {
   if (newVal) {
      document.body.style.overflow = 'hidden'
   } else {
      document.body.style.overflow = ''
   }
})
</script>
<template>
   <transition name="fade">
      <div
         v-if="isPopupEnabled"
         @click="popupStore.hidePopup"
         class="fixed inset-0 z-50 bg-zinc-800/60 flex items-center justify-center"
      >
         <div class="max-w-[1000px] w-full max-h-screen py-20 sm:max-h-screen overflow-auto">
            <div @click.stop class="relative p-6 md:p-8 m-4 bg-zinc-600 shadow-lg">
               <IconX
                  @click="popupStore.hidePopup"
                  size="25"
                  class="absolute top-0 right-0 z-60 cursor-pointer hover:text-yellow-600 transition duration-300"
               />
               <div v-if="'logo' === popupType">
                  <ul class="grid gap-4 grid-cols-1 md:grid-cols-3">
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Basic</div>
                        <div class="text-3xl font-bold font-montserrat">€149</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>1 logo concept</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>3 rounds of revisions</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Standard</div>
                        <div class="text-3xl font-bold font-montserrat">€499</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>3 logo concepts</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>5 rounds of revisions</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Social media profile images</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Premium</div>
                        <div class="text-3xl font-bold font-montserrat">€999</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>5 logo concepts</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>10 rounds of revisions</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Social media assets (profile and cover images)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>1 Business card design</span>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div v-if="'setupWpTheme' === popupType">
                  <ul class="grid gap-4 grid-cols-1 md:grid-cols-3">
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Basic</div>
                        <div class="text-3xl font-bold font-montserrat">€399</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Theme installation and activation</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Import demo content (if available)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Basic customization (logo, colors, fonts)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Essential plugin installation (SEO, security, caching)</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Standard</div>
                        <div class="text-3xl font-bold font-montserrat">€899</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Everything in the Basic Plan</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Advanced customization (layouts, menus, widgets)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Homepage and key pages setup (About, Contact, Blog)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Performance optimization (image compression, caching)</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-4">
                        <div class="text-lg font-bold">Premium</div>
                        <div class="text-3xl font-bold font-montserrat">€1599</div>
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Everything in the Standard Plan</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Old website migration</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Full website customization based on brand identity</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>WooCommerce setup (if needed)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Custom CSS adjustments for a unique look</span>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div class="flex justify-center pt-4">
                  <RouterLink
                     to="/contact"
                     @click="popupStore.hidePopup"
                     class="w-fit py-3 px-8 bg-yellow-600 hover:bg-yellow-700 transition duration-300 uppercase text-sm font-bold tracking-wider"
                     >Order Now</RouterLink
                  >
               </div>
            </div>
         </div>
      </div>
   </transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
