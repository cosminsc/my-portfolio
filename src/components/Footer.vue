<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
   <div class="text-xs text-zinc-600 py-2 text-center bg-zinc-900/40 absolute bottom-0 left-0 right-0">
      © 2007 - {{ currentYear }} - All rights reserverd.
   </div>
</template>
