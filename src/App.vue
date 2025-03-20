<script setup>
import { RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import Footer from './components/Footer.vue'
import Languages from '@/components/Languages.vue'
import Skills from '@/components/Skills.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import MainNavBar from './components/MainNavBar.vue'
import AuthorInfo from './components/AuthorInfo.vue'
</script>

<template>
   <div class="container mx-auto py-4 pl-[300px] relative">
      <!-- Sidebar -->
      <div class="bg-zinc-800/70 min-h-[calc(100vh-32px)] max-w-[300px] min-w-[300px] absolute left-0 top-4 bottom-4">
         <AuthorInfo />
         <SocialMedia />
         <div class="px-8">
            <Languages />
            <Skills />
         </div>
      </div>
      <!-- Content -->
      <div class="bg-zinc-800/40 min-h-[calc(100vh-32px)] pb-11 relative">
         <TopBanner />
         <MainNavBar />
         <RouterView />
         <Footer />
      </div>
   </div>
</template>
