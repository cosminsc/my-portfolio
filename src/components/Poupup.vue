<script setup>
import { usePopupStore } from '@/stores/popup';
import { IconCheck, IconX } from '@tabler/icons-vue';
import { storeToRefs } from 'pinia';

const popupStore = usePopupStore();
const { isPopupEnabled, popupType } = storeToRefs(popupStore);

</script>
<template>
   <transition name="fade">
      <div v-if="isPopupEnabled" @click="popupStore.hidePopup"
         class="absolute z-60 left-0 top-0 right-0 bottom-0 bg-zinc-800/60 flex items-center justify-center">
         <div @click.stop class="relative p-8 max-w-[1000px] w-full bg-zinc-600 shadow-lg">
            <IconX @click="popupStore.hidePopup" size="22"
               class="absolute top-1 right-1 z-60 cursor-pointer hover:text-yellow-600 transition duration-300" />
            <div v-if="'logo' === popupType">
               <ul class="grid gap-4 grid-cols-1 sm:grid-cols-3">
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
                           <span>Social media profile image</span>
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
                           <span>Unlimited revisions</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Social media assets (profile and cover images)</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Business card design</span>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
            <div v-if="'photo' === popupType">
               <ul class="grid gap-4 grid-cols-1 sm:grid-cols-3">
                  <li class="bg-zinc-700 p-4 space-y-4">
                     <div class="text-lg font-bold">Basic</div>
                     <div class="text-3xl font-bold font-montserrat">€9 <span class="text-sm font-normal">/ photo</span></div>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Color correction & exposure adjustments</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Cropping & resizing</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Background cleanup (small distractions removed)</span>
                        </li>
                     </ul>
                  </li>
                  <li class="bg-zinc-700 p-4 space-y-4">
                     <div class="text-lg font-bold">Standard</div>
                     <div class="text-3xl font-bold font-montserrat">€29 <span class="text-sm font-normal">/ photo</span></div>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Color correction & exposure adjustments</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Cropping & resizing</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Background cleanup, removal or replacement</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Product enhancement</span>
                        </li>
                     </ul>
                  </li>
                  <li class="bg-zinc-700 p-4 space-y-4">
                     <div class="text-lg font-bold">Premium</div>
                     <div class="text-3xl font-bold font-montserrat">€99 <span class="text-sm font-normal">/ photo</span></div>
                     <ul class="space-y-2">
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Color correction & exposure adjustments</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Cropping & resizing</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Background cleanup, removal or replacement</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Product enhancement</span>
                        </li>
                        <li class="flex items-center gap-2 text-sm">
                           <IconCheck size="18" class="text-sky-500 shrink-0" />
                           <span>Color grading for branding consistency</span>
                        </li>
                     </ul>
                  </li>
               </ul>
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