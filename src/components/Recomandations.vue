<script setup>
import { IconMapPinFilled } from '@tabler/icons-vue'
import { register } from 'swiper/element/bundle'

register()

const list = [
   {
      author: 'Steve Pavilanis',
      country: 'United States',
      quote: 'I hired him because he took the initiative to send me a mockup of a design I needed before I even formally hired him. His attention to detail and ability to follow my often confusing directions and turn around the work very quickly makes him a superstar! I have already hired him for other projects and he will be my go- to designer for all future projects.',
   },
   {
      author: 'Evelien van der Geest',
      country: 'Netherlands',
      quote: 'Pleasant and good freelancer to work with. Communication and deliverables within time. Communication via Trello worked well. Quality of code very good (almost no bugs). Overall, pleasant cooperation!',
   },
   {
      author: 'Helen Tonetti',
      country: 'United Kingdom',
      quote: 'I saw all the great feedback and thought I would give Cosmin a try, I am so glad I did, I will be back again and again. Great design, and he added his slant.',
   },
   {
      author: 'Vinay Nair',
      country: 'India',
      quote: "Cosmin is one of the best designers I've worked with. Not only is his design skills excellent but his way of working is also very professional. All my emails were answered promptly. Cosmin was also quick to understand my requirements. He was also very cooperative when I requested any changes. All in all, a gem of a contractor. I recommend him highly!",
   },
   {
      author: 'Jayson Thompson',
      country: 'United States',
      quote: 'Cosmin does a great job. We communicate regularly and I am always impressed with the work. If you choose him, you will get exactly what you want and better. Thanks',
   },
]
</script>
<template>
   <h2 class="text-2xl text-center lg:text-left font-bold mb-5">Recommendations</h2>
   <swiper-container
      :speed="1000"
      :space-between="16"
      :pagination="true"
      :loop="true"
      :pagination-clickable="true"
      :autoplay="{
         delay: 2500,
         pauseOnMouseEnter: true,
      }"
      :breakpoints="{
         768: { slidesPerView: 2 },
         1280: { slidesPerView: 3 },
      }"
   >
      <swiper-slide v-for="(item, index) in list" :key="index">
         <div class="p-4 bg-zinc-800 text-center lg:text-left">
            <h3 class="text-lg">{{ item.author }}</h3>
            <div class="text-sm text-zinc-600 flex items-center justify-center lg:justify-start gap-1 mt-1 mb-3">
               <IconMapPinFilled size="14" />
               <span>{{ item.country }}</span>
            </div>
            <div class="min-h-40 overflow-auto">
               <p class="text-zinc-500 italic text-sm">{{ item.quote }}</p>
            </div>
         </div>
      </swiper-slide>
   </swiper-container>
</template>
