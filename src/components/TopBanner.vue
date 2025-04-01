<template>
   <div class="bg-[url(/images/banner-bg.jpg)] bg-top bg-cover w-full">
      <div
         class="w-full h-85 lg:h-72 bg-zinc-900/70 px-6 lg:px-8 flex flex-col justify-evenly items-center text-center"
      >
         <h1 class="leading-11 md:leading-16 lg:leading-auto text-4xl xl:text-5xl font-montserrat font-extrabold">
            Specialized in web development <br/> and logo designs.
         </h1>
         <RouterLink
            to="/contact"
            class="w-fit py-3 px-8 bg-yellow-600 hover:bg-yellow-700 transition duration-300 uppercase text-sm font-bold tracking-wider"
            >Contact Me</RouterLink
         >
      </div>
   </div>
</template>
