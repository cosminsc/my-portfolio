<template>
   <div class="h-9 w-full bg-zinc-800 flex items-center gap-10 justify-center lg:justify-start px-8">
      <RouterLink to="/" activeClass="text-yellow-600" class="hover:text-yellow-700 transition duration-300"
         >Home</RouterLink
      >
      <RouterLink
         to="/portfolio"
         activeClass="text-yellow-600"
         class="hover:text-yellow-700 transition duration-300"
         >Portfolio</RouterLink
      >
      <RouterLink
         to="/history"
         activeClass="text-yellow-600"
         class="hover:text-yellow-700 transition duration-300"
         >History</RouterLink
      >
   </div>
</template>
