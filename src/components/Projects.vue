<script setup>
import { usePagination } from '@/composables/usePagination'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { onMounted, ref } from 'vue'

const list = ref([
   {
      description: 'Website Graphic design',
      fullSize: '/images/portfolio/greenbusiness.jpg',
      thumbailSize: '/images/portfolio/greenbusiness-small.jpg',
   },
   {
      description: 'Website Graphics & Logo Design',
      fullSize: '/images/portfolio/realestate.jpg',
      thumbailSize: '/images/portfolio/realestate-small.jpg',
   },
   {
      description: 'Website Graphic design',
      fullSize: '/images/portfolio/wikigames.jpg',
      thumbailSize: '/images/portfolio/wikigames-small.jpg',
   },
   {
      description: 'Website Graphics & Logo Design, e-Book design, Wordpress development',
      fullSize: '/images/portfolio/alifelessanxious.jpg',
      thumbailSize: '/images/portfolio/alifelessanxious-small.jpg',
   },
   {
      description: 'Graphic logo design, Wordpress development',
      fullSize: '/images/portfolio/lotsofhead.jpg',
      thumbailSize: '/images/portfolio/lotsofhead-small.jpg',
   },
   {
      description: 'Website Graphics & Logo Design, e-Book design, Wordpress development',
      fullSize: '/images/portfolio/homebrewvideos.jpg',
      thumbailSize: '/images/portfolio/homebrewvideos-small.jpg',
   },
   {
      description: 'Website Graphics & Logo Design, e-Book design, Wordpress development',
      fullSize: '/images/portfolio/weightloss.jpg',
      thumbailSize: '/images/portfolio/weightloss-small.jpg',
   },
   // {
   //    description: 'Project #2',
   //    fullSize: 'https://lipsum.app/id/50/1280x720',
   //    thumbailSize: 'https://lipsum.app/id/50/600x400',
   //    gallery: [
   //       {
   //          fullSize: 'https://lipsum.app/id/51/1280x720',
   //          thumbailSize: 'https://lipsum.app/id/51/600x400',
   //       },
   //       {
   //          fullSize: 'https://lipsum.app/id/52/1280x720',
   //          thumbailSize: 'https://lipsum.app/id/52/600x400',
   //       },
   //    ],
   // },
])

const { currentPage, totalPages, paginatedList, prevPage, nextPage } = usePagination(list.value, 15)

onMounted(() => {
   Fancybox.bind('[data-fancybox]', {})
})
</script>
<template>
   <h2 class="text-2xl text-center xl:text-left font-bold mb-5">Client Projects</h2>
   <ul class="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <li v-for="(item, index) in paginatedList" :key="index" class="relative overflow-hidden group">
         <a :href="item.fullSize" :data-fancybox="`gallery-${index}`" :data-caption="item.description">
            <img
               :src="item.thumbailSize"
               class="transition duration-400 opacity-80 hover:opacity-100 hover:scale-105 w-full"
            />
         </a>
         <div v-if="item.gallery" class="hidden">
            <a
               v-for="(itemGallery, indexGallery) in item.gallery"
               :key="indexGallery"
               :href="itemGallery.fullSize"
               :data-fancybox="`gallery-${index}`"
               :data-caption="itemGallery.description ?? item.description"
            >
               <img :src="itemGallery.thumbailSize" />
            </a>
         </div>
         <div
            class="bg-zinc-800/90 h-fit absolute left-0 bottom-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-in-out"
         >
            {{ item.description }}
         </div>
      </li>
   </ul>
   <div v-if="totalPages > 1" class="flex justify-start items-center gap-4 mt-4 text-sm">
      <button
         @click="prevPage"
         :disabled="currentPage === 1"
         class="px-2 py-1 bg-zinc-700 cursor-pointer hover:bg-zinc-600 hover:disabled:bg-zinc-700 disabled:opacity-50 rounded"
      >
         Prev
      </button>
      <span class="text-zinc-500">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
         @click="nextPage"
         :disabled="currentPage === totalPages"
         class="px-2 py-1 bg-zinc-700 cursor-pointer hover:bg-zinc-600 hover:disabled:bg-zinc-700 disabled:opacity-50 rounded"
      >
         Next
      </button>
   </div>
</template>