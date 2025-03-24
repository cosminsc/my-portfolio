<script setup>
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import Footer from './components/Footer.vue'
import Skills from '@/components/Skills.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import MainNavBar from './components/MainNavBar.vue'
import AuthorInfo from './components/AuthorInfo.vue'
import { IconX } from '@tabler/icons-vue'
import Poupup from './components/Poupup.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = (event) => {
   event.preventDefault()
   isSidebarOpen.value = !isSidebarOpen.value
}

watch(isSidebarOpen, (newVal) => {
   if (newVal) {
      document.body.style.overflow = 'hidden'
   } else {
      document.body.style.overflow = ''
   }
})
</script>

<template>
   <div class="lg:container mx-auto py-0 lg:py-4 lg:pl-[300px] relative">
      <div
         @click="toggleSidebar"
         class="fixed z-50 flex items-center justify-end lg:hidden left-0 top-30 bg-zinc-600 pr-3 h-16 w-16 rounded-r-full shadow cursor-pointer"
         :class="{ hidden: isSidebarOpen }"
      >
         <img
            class="inline-block size-11 rounded-full ring-2 ring-sky-500"
            src="/images/author-avatar-small.jpg"
            alt=""
         />
      </div>
      <!-- Sidebar -->
      <div
         class="transition-all duration-800 ease-in-out bg-zinc-800 lg:bg-zinc-800/70 min-h-[calc(100vh-32px)] w-[300px] z-40 fixed lg:absolute top-0 bottom-0 lg:left-0 lg:top-4 lg:bottom-4 shadow-lg lg:shadow-none overflow-y-auto max-h-screen lg:overflow-auto lg:max-h-none"
         :class="isSidebarOpen ? 'translate-x-0 left-0' : '-left-[300px] '"
      >
         <IconX v-if="isSidebarOpen" @click="isSidebarOpen = false" size="32" class="absolute top-3 right-3 z-50" />
         <AuthorInfo />
         <SocialMedia />
         <Skills />
      </div>
      <!-- Content -->
      <div class="bg-zinc-800/40 min-h-[calc(100vh-32px)] pb-11 relative">
         <div
            @click="isSidebarOpen = false"
            class="absolute left-0 top-0 right-0 bottom-0 z-10 bg-zinc-900/90"
            :class="{ hidden: !isSidebarOpen }"
         ></div>
         <TopBanner />
         <MainNavBar />
         <RouterView />
         <Footer />
      </div>
   </div>
   <Poupup />
</template>
