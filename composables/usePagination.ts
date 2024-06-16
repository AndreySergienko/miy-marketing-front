export function usePagination() {
  const page = ref<number>(1)
  const size = ref<number>(10)

  const paginationQuery = computed<string>(() => `?page=${page.value}&size=${size.value}`)

  const incrementPage = () => page.value++
  const decrementPage = () => page.value--

  return {
    incrementPage,
    decrementPage,
    paginationQuery,
    size,
    page,
  }
}
