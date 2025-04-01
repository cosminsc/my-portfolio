<script setup lang="ts">
import { IconChevronsRight, IconApps, IconPlug, IconPencilBolt, IconTemplate } from '@tabler/icons-vue'
import { usePopupStore } from '@/stores/popup'

const popupStore = usePopupStore()

const list = [
   {
      icon: IconPlug,
      name: 'Wordpress Integrations',
      description:
         'I develop tailor-made WordPress plugins to extend functionality, improve performance, and meet specific business needs with clean and efficient code.',
   },
   {
      icon: IconTemplate,
      name: 'Setup Business Websites',
      pricingType: 'setupWpTheme',
      description:
         'I set up and customize WordPress themes to create a visually appealing and fully functional website, ensuring optimal performance.',
   },
   {
      icon: IconApps,
      name: 'Custom applications',
      description:
         'I build scalable and high-performance web applications using Laravel, leveraging its powerful features to create secure and efficient solutions.',
   },
   {
      icon: IconPencilBolt,
      name: 'Logo designs',
      pricingType: 'logo',
      description:
         'I craft visually compelling and memorable logo designs that align with brand identity, ensuring a strong and professional presence.',
   },
]
</script>
<template>
   <h2 class="text-2xl text-center xl:text-left font-bold mb-5">What Do I offer?</h2>
   <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <li
         v-for="(service, index) in list"
         class="p-4 bg-zinc-800 transition duration-300 hover:bg-zinc-700/50 hover:cursor-default text-center xl:text-left grid xl:grid-cols-[24%_74%] xl:gap-2 group"
         :key="index"
      >
         <component
            :is="service.icon"
            size="100"
            class="m-auto hidden sm:block xl:m-0 xl:m-auto text-zinc-500 transition duration-300 group-hover:text-blue-500"
         />
         <div class="pt-4 xl:pt-0">
            <h3 class="text-lg mb-3">{{ service.name }}</h3>
            <p class="text-zinc-500 mb-2">{{ service.description }}</p>
            <button
               v-if="service.pricingType"
               @click="popupStore.showPopup(service.pricingType)"
               type="button"
               class="font-bold text-yellow-600 hover:text-yellow-700 hover:underline transition duration-300 cursor-pointer h-10 flex items-center gap-1 w-fit m-auto xl:m-0 xl:justify-start"
            >
               <IconChevronsRight size="20" />
               <span>View Pricing</span>
            </button>
            <RouterLink
               v-else
               to="/contact"
               class="font-bold text-yellow-600 hover:text-yellow-700 hover:underline transition duration-300 cursor-pointer h-10 flex items-center gap-1 w-fit m-auto xl:m-0 xl:justify-start"
            >
               <IconChevronsRight size="20" />
               <span>Request a Quote</span>
            </RouterLink>
         </div>
      </li>
   </ul>
</template>
