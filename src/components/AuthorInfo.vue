<script setup lang="ts">
import { IconMapPinFilled } from '@tabler/icons-vue'
</script>
<template>
   <div class="bg-zinc-700/50 py-8 flex flex-col items-center">
      <img
         class="inline-block mb-4 size-28 rounded-full ring-3 ring-zinc-100"
         src="/images/author-avatar-small.jpg"
         alt=""
      />
      <div class="font-bold">Cosmin Șchiopu</div>
      <div class="text-sm text-zinc-500 text-center">Full-stack Web Developer &</div>
      <div class="text-sm text-zinc-500 mb-3 text-center">Design enthusiastic</div>
      <div class="flex gap-1 items-center text-xs text-zinc-500">
         <IconMapPinFilled size="14" />
         <span>Brasov, Romania</span>
      </div>
   </div>
</template>
