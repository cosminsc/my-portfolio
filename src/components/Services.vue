<script setup lang="ts">
import { IconBrandLaravel, IconBrandWordpress, IconPencilBolt, IconPhotoEdit } from '@tabler/icons-vue'

const list = [
   {
      icon: IconBrandWordpress,
      name: 'Wordpress plugins',
      description:
         'I develop tailor-made WordPress plugins to extend functionality, improve performance, and meet specific business needs with clean and efficient code.',
   },
   {
      icon: IconBrandLaravel,
      name: 'Laravel applications',
      description:
         'I build scalable and high-performance web applications using Laravel (+Vue.js), leveraging its powerful features to create secure and efficient solutions.',
   },
   {
      icon: IconPencilBolt,
      name: 'Logo designs',
      description:
         'I craft visually compelling and memorable logo designs that align with brand identity, ensuring a strong and professional presence.',
   },
   {
      icon: IconPhotoEdit,
      name: 'Photo editting',
      description:
         'I enhance images through advanced photo editing techniques, improving colors, sharpness, and composition to deliver stunning visuals.',
   },
]
</script>
<template>
   <h2 class="text-2xl text-center lg:text-left font-bold mb-5">My Services</h2>
   <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <li
         v-for="(service, index) in list"
         class="p-4 bg-zinc-800 transition duration-300 hover:bg-zinc-700/50 hover:cursor-default text-center lg:text-left lg:flex lg:items-center lg:gap-4 group"
         :key="index"
      >
         <component
            :is="service.icon"
            size="100"
            class="max-w-32 w-full lg:mb-0 m-auto lg:m-0 text-zinc-500 transition duration-300 group-hover:text-blue-500"
         />
         <div class="pt-4 lg:pt-0">
            <h3 class="text-lg mb-3">{{ service.name }}</h3>
            <p class="text-zinc-500">{{ service.description }}</p>
         </div>
      </li>
   </ul>
</template>
