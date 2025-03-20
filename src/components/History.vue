<script setup>
import { IconCalendarMonthFilled, IconCertificate, IconLink } from '@tabler/icons-vue'

const workList = [
   {
      period: 'Apr 2019 - Present',
      active: true,
      website: 'woosa.com',
      name: 'Technical Project Management and Web Development',
      description:
         'Managing and guiding the technical aspects of web development, including project planning, architecture design, and quality control to meet business requirements.',
   },
   {
      period: 'Oct 2017 - Apr 2019',
      website: null,
      name: 'Freelance Web Developer',
      description:
         'Delivered custom WordPress solutions for various one-time projects, including theme customization, plugin development, and performance optimization. ',
   },
   {
      period: 'Nov 2012 - Oct 2017',
      website: 'nego-solutions.com',
      name: 'Senior WordPress Developer',
      description:
         'Progressed into a key role in WordPress development, becoming the go-to expert for a wide range of projects. After successfully delivering the first WordPress project, I continued to work on custom themes, custom plugins, performance optimization, API integrations, and maintenance services. Focused on delivering scalable, high-performance solutions tailored to business needs.',
   },
   {
      period: 'Sep 2011 - Nov 2012',
      website: 'nego-solutions.com',
      name: 'Web Designer',
      description:
         'Collaborated with Nego-Solutions as a Web Designer, responsible for designing and developing engaging landing pages, creating custom branding kits, and designing promotional materials such as banners for Facebook, Twitter, and other digital platforms. Ensured brand consistency and high-quality visuals to enhance online presence and user engagement.',
   },
   {
      period: 'Jan 2010 - Sep 2012 (part-time)',
      website: 'forumgratuit.ro',
      name: 'Graphic Designer (Volunteer)',
      description:
         'As a volunteer graphic designer at ForumGratuit.ro, I created a wide range of custom graphic design packages tailored to customer needs. In addition to design work, I enhanced my technical skills in HTML, CSS, and the jQuery library by customizing static templates and forum layouts, ensuring a seamless user experience and visually appealing interfaces.',
   },
   {
      period: 'May 2007 - Sep 2010',
      website: null,
      name: 'Freelance Graphic Designer',
      description: 'Worked on a diverse range of graphic design projects.',
   },
]

const educationList = [
   {
      period: 'Nov 2017',
      website: 'https://www.cosminsc.net/pdf/certificate1.pdf',
      name: 'Master JavaScript Closures, Data Structures and Map/Reduce',
      description:
         'This course focuses on the tools and techniques you need to understand to be effective and productive working on JavaScript in the real world. Get firmly grounded in the fundamentals of intermediate JavaScript with an eye to the future of this remarkable and evolving language.',
   },
   {
      period: '2005 - 2009',
      website: null,
      name: 'High School',
      description: 'Studied Natural Science at Nicolae Titulescu, Brasov, Romania.',
   },
]
</script>
<template>
   <div class="px-8 pb-8">
      <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
         <div>
            <h2 class="text-2xl font-bold mb-5">Work</h2>
            <div
               v-for="(item, index) in workList"
               class="timeline__item"
               :class="item.active ? 'active' : ''"
               :key="index"
            >
               <div class="flex items-center text-sm text-zinc-400">
                  <div class="timeline__period text-xs flex items-center gap-1">
                     <IconCalendarMonthFilled size="14" />
                     <span>{{ item.period }}</span>
                  </div>
               </div>
               <div class="text-lg">{{ item.name }}</div>
               <div
                  v-if="item.website"
                  class="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
               >
                  <IconLink size="14" />
                  <a :href="`https://${item.website}`" target="_blank"
                     ><span>{{ item.website }}</span></a
                  >
               </div>
               <div class="timeline__description text-zinc-500">{{ item.description }}</div>
            </div>
         </div>
         <div>
            <h2 class="text-2xl font-bold mb-5">Education</h2>
            <div v-for="(item, index) in educationList" class="timeline__item" :key="index">
               <div class="flex items-center text-sm text-zinc-400">
                  <div class="timeline__period text-xs flex items-center gap-1">
                     <IconCalendarMonthFilled size="14" />
                     <span>{{ item.period }}</span>
                  </div>
               </div>
               <div class="text-lg">{{ item.name }}</div>
               <div
                  v-if="item.website"
                  class="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
               >
                  <IconCertificate size="15" />
                  <a :href="item.website" target="_blank"><span>Certificate</span></a>
               </div>
               <div class="timeline__description text-zinc-500">{{ item.description }}</div>
            </div>
         </div>
      </div>
   </div>
</template>
<style scoped>
.timeline__item {
   padding: 0 0 20px 15px;
   position: relative;
   border-left: 2px solid #313135;
}
.timeline__item:after,
.timeline__item:before {
   content: '';
   display: inline-block;
   position: absolute;
}
.timeline__item:before {
   border-radius: 10px;
   width: 12px;
   height: 12px;
   top: 5px;
   left: -7px;
   background: #313135;
   z-index: 2;
}
.timeline__item.active:before {
   background: #00a6f4;
}
.timeline__item:after {
   background-color: #313135;
   width: 15px;
   height: 2px;
   top: 10px;
   left: 0;
   z-index: 1;
}
.timeline__company,
.timeline__period {
   margin-bottom: 10px;
   letter-spacing: 1px;
   padding: 4px 6px;
   background: #313135;
}
</style>
