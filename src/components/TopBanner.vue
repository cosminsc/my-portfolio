<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
import Typed from 'typed.js'
import { onMounted } from 'vue'

onMounted(() => {
   new Typed('#sentences', {
      strings: [
         'I develop custom WordPress plugins tailored to enhance functionality and performance.',
         'I build scalable and efficient web applications using Laravel and Vue.js.',
         'I design professional and visually compelling logos that align with brand identity.',
         'I enhance and refine photos with expert-level editing techniques.',
      ],
      typeSpeed: 20,
      backSpeed: 5,
      backDelay: 3000,
      loop: true,
   })
})
</script>
<template>
   <div class="bg-[url(/images/banner-bg.jpg)] bg-top bg-cover w-full h-72">
      <div class="w-full h-80 bg-zinc-900/70 p-8 flex flex-col justify-center">
         <h1 class="text-5xl font-montserrat font-extrabold mb-5">Discover my Awesome Work!</h1>
         <div class="flex items-center font-anonymousPro text-lg mb-5">
            <div class="flex items-center gap-0">
               <IconChevronLeft size="15" />
               <span class="text-sky-500">code</span>
               <IconChevronRight size="15" />
            </div>
            <div id="sentences"></div>
            <div class="flex items-center gap-0">
               <IconChevronLeft size="15" />/
               <span class="text-sky-500 pl-[2px]">code</span>
               <IconChevronRight size="15" />
            </div>
         </div>
         <a
            href="#"
            class="w-fit py-3 px-8 bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 uppercase text-sm font-bold tracking-wider"
            >Book a call</a
         >
      </div>
   </div>
</template>
