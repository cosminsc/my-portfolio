<script setup>
import { IconCheck } from '@tabler/icons-vue'

const skillSet = [
   {
      name: 'Personal',
      skills: [
         {
            name: 'Responsible & reliable',
            percentage: 100,
         },
         {
            name: 'Prompt & organized',
            percentage: 100,
         },
         {
            name: 'Self-taught & passionate',
            percentage: 100,
         },
      ],
   },
   {
      name: 'Web development',
      skills: [
         {
            name: 'HTML & CSS',
            percentage: 95,
         },
         {
            name: 'jQuery',
            percentage: 95,
         },
         {
            name: 'VueJs',
            percentage: 70,
         },
         {
            name: 'PHP',
            percentage: 95,
         },
         {
            name: 'Wordpress',
            percentage: 95,
         },
         {
            name: 'Laravel',
            percentage: 70,
         },
      ],
   },
   {
      name: 'Graphic design',
      skills: [
         {
            name: 'Photoshop',
            percentage: 90,
         },
         {
            name: 'Lightroom',
            percentage: 80,
         },
         {
            name: 'Illustrator',
            percentage: 60,
         },
      ],
   },
]

const toolkit = ['tailwind, bootstrap, materialize', 'composer, npm, gulp', 'gitlab, github']
</script>
<template>
   <div class="space-y-7 p-8 mb-15">
      <div v-for="(item, index) in skillSet" :key="index">
         <div class="border-b-1 border-zinc-700 pb-1 mb-3">{{ item.name }}</div>
         <div class="text-sm space-y-3">
            <div v-for="(skill, index) in item.skills" :key="index">
               <div class="flex w-full justify-between pb-1 text-zinc-400">
                  <span>{{ skill.name }}</span>
                  <span class="text-zinc-600 text-xs">{{ skill.percentage }}%</span>
               </div>
               <div class="bg-zinc-700 w-full h-0.5">
                  <div class="bg-sky-500 h-0.5" :style="{ width: skill.percentage + '%' }"></div>
               </div>
            </div>
         </div>
      </div>

      <div class="mb-12 md:mb-0">
         <div class="border-b-1 border-zinc-700 pb-1 mb-3">Toolkit</div>
         <div v-for="(item, index) in toolkit" :key="index" class="text-zinc-400 flex items-center gap-2 text-sm">
            <IconCheck size="18" class="text-sky-500" />
            <span>{{ item }}</span>
         </div>
      </div>
   </div>
</template>
