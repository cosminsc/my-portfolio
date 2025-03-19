<script setup lang="ts">
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandUpwork, IconWorldWww } from '@tabler/icons-vue';

</script>

<template>
   <div class="bg-zinc-700/25 p-2 w-full flex justify-evenly text-zinc-500">
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://www.instagram.com/cosmin.sch/"
         target="_blank"
         title="Find me on Instagram"
         ><IconBrandInstagramFilled size="20"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://www.linkedin.com/in/cosmin-schiopu-35374b113/"
         target="_blank"
         title="Find me on LinkedIn"
         ><IconBrandLinkedinFilled size="20"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://www.upwork.com/freelancers/~01508604d33b2807d6?mp_source=share"
         target="_blank"
         title="Hire me on UpWork"
         ><IconBrandUpwork size="20"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://github.com/cosminsc"
         target="_blank"
         title="Check my GitHub"
         ><IconBrandGithubFilled size="20"
      /></a>
      <a
         class="hover:text-zinc-300 hover:scale-110 transition-colors duration-300"
         href="https://picsmin.com"
         target="_blank"
         title="Check my photography shop"
         ><IconWorldWww size="20"
      /></a>
   </div>
</template>
