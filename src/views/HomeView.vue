<script setup>
import MainNavBar from '@/components/MainNavBar.vue'
import Recomandations from '@/components/Recomandations.vue'
import Services from '@/components/Services.vue'
import TopBanner from '@/components/TopBanner.vue'
</script>

<template>
   <div class="bg-zinc-800/40 min-h-[calc(100vh-32px)]">
      <MainNavBar />
      <div class="space-y-6">
         <TopBanner />
         <Services />
         <Recomandations />
      </div>
   </div>
</template>
