<script setup>
import Languages from '@/components/Languages.vue'
import Skills from '@/components/Skills.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import { IconMapPinFilled } from '@tabler/icons-vue'
</script>

<template>
   <div class="bg-zinc-800/70 min-h-[calc(100vh-32px)] max-w-[300px] min-w-[300px]">
      <div class="bg-zinc-700/50 py-8 flex flex-col items-center">
         <img
            class="inline-block mb-4 size-28 rounded-full ring-3 ring-zinc-100"
            src="/images/author-avatar-small.jpg"
            alt=""
         />
         <div class="font-bold">Cosmin Șchiopu</div>
         <div class="text-sm text-zinc-500 text-center">Full-stack Web Developer &</div>
         <div class="text-sm text-zinc-500 mb-3 text-center">Design enthusiastic</div>
         <div class="flex gap-2 items-center text-xs text-zinc-500">
            <IconMapPinFilled size="14" />
            <span>Brasov, Romania</span>
         </div>
      </div>
      <SocialMedia />
      <div class="px-8">
         <Languages />
         <Skills />
      </div>
   </div>
   <div class="bg-zinc-800/40 w-full p-6"></div>
</template>
