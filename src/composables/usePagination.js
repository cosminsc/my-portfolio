import { ref, computed } from 'vue'

export function usePagination(items, itemsPerPage = 3) {
   const currentPage = ref(1)
   const totalPages = computed(() => Math.ceil(items.length / itemsPerPage))

   // Compute paginated items
   const paginatedList = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      return items.slice(start, start + itemsPerPage)
   })

   // Navigation functions
   const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--
   }
   const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++
   }

   return { currentPage, totalPages, paginatedList, prevPage, nextPage }
}
