<template>
   <div class="h-9 w-full bg-zinc-800 flex items-center gap-10 px-8 mb-6">
      <RouterLink to="/" activeClass="text-yellow-600" class="hover:text-yellow-700 transition-colors duration-300"
         >Home</RouterLink
      >
      <RouterLink
         to="/portfolio"
         activeClass="text-yellow-600"
         class="hover:text-yellow-700 transition-colors duration-300"
         >Portfolio</RouterLink
      >
      <RouterLink
         to="/history"
         activeClass="text-yellow-600"
         class="hover:text-yellow-700 transition-colors duration-300"
         >History</RouterLink
      >
   </div>
</template>
