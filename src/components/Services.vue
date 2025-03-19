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
   <div class="px-8">
      <h2 class="text-2xl font-bold mb-5">My Services</h2>
      <ul class="grid gap-4 grid-cols-1 lg:grid-cols-2">
         <li v-for="(service, index) in list" class="p-4 bg-zinc-800 flex items-center gap-4" :key="index">
            <component :is="service.icon" size="100" class="max-w-32 w-full hidden md:block text-zinc-500" />
            <div>
               <h3 class="text-lg mb-3">{{ service.name }}</h3>
               <p class="text-zinc-500">{{ service.description }}</p>
            </div>
         </li>
      </ul>
   </div>
</template>
