<script setup lang="ts">
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconWorldWww } from '@tabler/icons-vue';

</script>

<template>
   <div class="bg-zinc-700/25 p-2 w-full flex justify-evenly text-zinc-500">
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://www.instagram.com/cosmin.sch/"
         target="_blank"
         title="See me on Instagram"
         ><IconBrandInstagramFilled size="24"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://www.linkedin.com/in/cosmin-schiopu-35374b113/"
         target="_blank"
         title="See me on LinkedIn"
         ><IconBrandLinkedinFilled size="24"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://github.com/cosminsc"
         target="_blank"
         title="See me on GitHub"
         ><IconBrandGithubFilled size="24"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://picsmin.com"
         target="_blank"
         title="See my photography shop"
         ><IconWorldWww size="24"
      /></a>
   </div>
</template>
