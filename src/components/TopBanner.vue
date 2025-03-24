<script setup lang="ts">
import Typed from 'typed.js'
import { onMounted } from 'vue'

onMounted(() => {
   new Typed('#sentences', {
      strings: [
         'I develop custom WordPress plugins tailored to enhance functionality and performance.',
         'I build scalable and efficient web applications using Laravel and VueJs.',
         'I design professional and visually compelling logos that align with brand identity.',
      ],
      typeSpeed: 20,
      backSpeed: 5,
      backDelay: 3500,
      loop: true,
   })
})
</script>
<template>
   <div class="bg-[url(/images/banner-bg.jpg)] bg-top bg-cover w-full">
      <div
         class="w-full h-85 lg:h-72 bg-zinc-900/70 px-6 lg:px-8 flex flex-col justify-evenly items-center lg:items-start text-center lg:text-left"
      >
         <h1 class="leading-11 md:leading-16 lg:leading-auto text-4xl xl:text-5xl font-montserrat font-extrabold">
            Discover my Awesome Work!
         </h1>
         <div
            class="text-base md:text-lg min-h-18 xl:min-h-fit max-w-[500px] lg:max-w-none flex items-center font-anonymousPro justify-center lg:justify-start"
         >
            <div id="sentences"></div>
         </div>
         <RouterLink
            to="/contact"
            class="w-fit py-3 px-8 bg-yellow-600 hover:bg-yellow-700 transition duration-300 uppercase text-sm font-bold tracking-wider"
            >Contact Me</RouterLink
         >
      </div>
   </div>
</template>
