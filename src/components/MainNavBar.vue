<template>
   <div class="w-full bg-zinc-800 flex items-center gap-6 lg:gap-8 justify-center lg:justify-start px-8">
      <RouterLink
         to="/"
         activeClass="text-yellow-600"
         class="flex items-center h-9 hover:text-yellow-700 transition duration-300"
         >Home</RouterLink
      >
      <RouterLink
         to="/portfolio"
         activeClass="text-yellow-600"
         class="flex items-center h-9 hover:text-yellow-700 transition duration-300"
         >Portfolio</RouterLink
      >
      <RouterLink
         to="/history"
         activeClass="text-yellow-600"
         class="flex items-center h-9 hover:text-yellow-700 transition duration-300"
         >History</RouterLink
      >
      <RouterLink
         to="/contact"
         activeClass="text-yellow-600"
         class="flex items-center h-9 hover:text-yellow-700 transition duration-300"
         >Contact</RouterLink
      >
   </div>
</template>
