<script setup lang="ts">
import History from '@/components/History.vue';
import MainNavBar from '@/components/MainNavBar.vue';
import TopBanner from '@/components/TopBanner.vue';

</script>

<template>
   <div class="bg-zinc-800/40 min-h-[calc(100vh-32px)]">
      <MainNavBar />
      <div class="space-y-6">
         <TopBanner />
         <History />
      </div>
   </div>
</template>