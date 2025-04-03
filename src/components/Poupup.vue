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
         class="fixed inset-0 z-50 bg-zinc-800/90 flex items-center justify-center"
      >
         <div class="max-w-[1000px] w-full max-h-screen py-20 sm:max-h-screen overflow-auto">
            <div @click.stop class="relative p-6 md:p-8 m-4 bg-zinc-600 shadow-lg">
               <IconX
                  @click="popupStore.hidePopup"
                  size="25"
                  class="absolute top-0 right-0 z-60 cursor-pointer hover:text-yellow-600 transition duration-300"
               />
               <div v-if="'logoDesign' === popupType">
                  <div class="text-center text-2xl mb-6">Logo Design</div>
                  <ul class="grid gap-4 grid-cols-1 md:grid-cols-3">
                     <li class="bg-zinc-700 p-4 space-y-2">
                        <div class="text-lg font-bold">Basic</div>
                        <div class="text-sm text-zinc-400">A simple yet effective logo design process.</div>
                        <div class="text-3xl font-bold font-montserrat">€149</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-zinc-600 hover:bg-zinc-500 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>1 logo concept</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Up to 3 rounds of revisions</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-2 border-1 border-sky-600">
                        <div class="text-lg font-bold">Standard</div>
                        <div class="text-sm text-zinc-400">
                           More options and branding assets for a professional look.
                        </div>
                        <div class="text-3xl font-bold font-montserrat">€499</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-yellow-600 hover:bg-yellow-700 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>3 logo concepts</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Up to 5 rounds of revisions</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Social media profile images</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-2">
                        <div class="text-lg font-bold">Premium</div>
                        <div class="text-sm text-zinc-400">
                           More options and branding assets for a professional look.
                        </div>
                        <div class="text-3xl font-bold font-montserrat">€999</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-zinc-600 hover:bg-zinc-500 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>5 logo concepts</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Up to 10 rounds of revisions</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Social media assets (profile & cover images)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>1 Business card design</span>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div v-if="'businessWebsiteSetup' === popupType">
                  <div class="text-center text-2xl mb-5">Business Website Setup</div>
                  <ul class="grid gap-4 grid-cols-1 md:grid-cols-3">
                     <li class="bg-zinc-700 p-4 space-y-2">
                        <div class="text-lg font-bold">Basic</div>
                        <div class="text-sm text-zinc-400">A quick and simple setup to get your website running.</div>
                        <div class="text-3xl font-bold font-montserrat">€299</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-zinc-600 hover:bg-zinc-500 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Theme installation and activation</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Demo content import (if available)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Customization of the Home page</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-2 border-1 border-sky-600">
                        <div class="text-lg font-bold">Standard</div>
                        <div class="text-sm text-zinc-400">
                           An enhanced setup with essential features for your website.
                        </div>
                        <div class="text-3xl font-bold font-montserrat">€999</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-yellow-600 hover:bg-yellow-700 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Everything in the Basic Plan</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Customization of up to 5 pages</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Essential plugin installation (SEO, security, caching)</span>
                           </li>
                        </ul>
                     </li>
                     <li class="bg-zinc-700 p-4 space-y-2">
                        <div class="text-lg font-bold">Premium</div>
                        <div class="text-sm text-zinc-400">
                           A fully customized solution tailored to your brand’s needs.
                        </div>
                        <div class="text-3xl font-bold font-montserrat">€1699</div>
                        <RouterLink
                           to="/contact"
                           class="w-fit py-2 px-6 mb-4 block bg-zinc-600 hover:bg-zinc-500 transition duration-300"
                           >Contact me</RouterLink
                        >
                        <ul class="space-y-2">
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Everything in the Standard Plan</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Customization of up to 10 pages</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Full website customization based on brand identity</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>Old website migration (if needed)</span>
                           </li>
                           <li class="flex items-center gap-2 text-sm">
                              <IconCheck size="18" class="text-sky-500 shrink-0" />
                              <span>WooCommerce setup (if needed)</span>
                           </li>
                        </ul>
                     </li>
                  </ul>
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
