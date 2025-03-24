<script setup lang="ts">
import { IconClipboardTextFilled, IconMailFilled, IconMessageFilled, IconUserFilled } from '@tabler/icons-vue'
import { ref } from 'vue'

const resultMessage = ref(null)
const isProcessing = ref(false)
const formData = ref({
   name: '',
   email: '',
   project: '',
   message: '',
   access_key: '57c2b0a1-154c-495d-b538-167eba2a5480',
})

const submitForm = async () => {
   isProcessing.value = true

   const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify(formData.value),
   })

   const result = await response.json()

   if (result.success) {
      formData.value.name = ''
      formData.value.email = ''
      formData.value.project = ''
      formData.value.message = ''
   }

   resultMessage.value = result.message

   isProcessing.value = false
}
</script>
<template>
   <div class="space-y-6 lg:space-y-8 p-6 lg:p-8">
      <h2 class="text-2xl text-center lg:text-left font-bold mb-5">Contact</h2>
      <form @submit.prevent="submitForm">
         <div class="bg-zinc-800 p-6 lg:p-8 space-y-6">
            <div class="md:grid md:grid-cols-[20%_80%]">
               <label for="name" class="flex items-center gap-1 h-9 text-zinc-500">
                  <IconUserFilled />
                  <span>Name</span>
               </label>
               <div>
                  <input
                     type="text"
                     required
                     name="name"
                     id="name"
                     v-model="formData.name"
                     class="block min-w-0 w-full grow h-9 px-3 focus:outline-1 focus:outline-sky-700 bg-zinc-700/50"
                     autocomplete="off"
                  />
               </div>
            </div>
            <div class="md:grid md:grid-cols-[20%_80%]">
               <label for="email" class="flex items-center gap-1 h-9 text-zinc-500">
                  <IconMailFilled />
                  <span>Email</span>
               </label>
               <div>
                  <input
                     type="email"
                     required
                     name="email"
                     id="email"
                     v-model="formData.email"
                     class="block min-w-0 w-full grow h-9 px-3 focus:outline-1 focus:outline-sky-700 bg-zinc-700/50"
                     autocomplete="off"
                  />
               </div>
            </div>
            <div class="md:grid md:grid-cols-[20%_80%]">
               <label for="project" class="flex items-center gap-1 h-9 text-zinc-500">
                  <IconClipboardTextFilled />
                  <span>Project</span>
               </label>
               <div>
                  <select
                     name="project"
                     required
                     id="project"
                     v-model="formData.project"
                     class="block min-w-0 w-full grow h-9 px-3 focus:outline-1 focus:outline-sky-700 bg-zinc-700/50 border-none appearance-none"
                  >
                     <option class="bg-zinc-700 text-zinc-400" value="Wordpress Plugin">Wordpress Plugin</option>
                     <option class="bg-zinc-700 text-zinc-400" value="Laravel Application">Laravel Application</option>
                     <option class="bg-zinc-700 text-zinc-400" value="Logo Design">Logo Design</option>
                     <option class="bg-zinc-700 text-zinc-400" value="Photo Editing">Photo Editing</option>
                     <option class="bg-zinc-700 text-zinc-400" value="Other">Other</option>
                  </select>
               </div>
            </div>
            <div class="md:grid md:grid-cols-[20%_80%]">
               <label for="message" class="flex items-center gap-1 h-9 text-zinc-500">
                  <IconMessageFilled />
                  <span>Message</span>
               </label>
               <div>
                  <textarea
                     name="message"
                     required
                     id="message"
                     rows="6"
                     v-model="formData.message"
                     class="block min-w-0 w-full grow p-3 focus:outline-1 focus:outline-sky-700 bg-zinc-700/50"
                  ></textarea>
               </div>
            </div>
            <div class="md:grid md:grid-cols-[20%_80%]">
               <div></div>
               <div>
                  <button v-if="isProcessing" :disabled="true" class="w-fit py-3 px-8 bg-zinc-900/50 text-zinc-600">
                     Processing...
                  </button>
                  <button
                     v-else
                     type="submit"
                     class="w-fit py-3 px-8 bg-zinc-700 hover:bg-zinc-600 transition duration-300 uppercase text-sm font-bold tracking-wider cursor-pointer"
                  >
                     Send Message
                  </button>

                  <div v-if="resultMessage" class="mt-4">{{ resultMessage }}</div>
               </div>
            </div>
         </div>
      </form>
   </div>
</template>
