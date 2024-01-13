import { defineStore } from 'pinia'

import type { SearchParams } from '@/types/searchParams'

export const useBooksStore = defineStore({
  id: 'books',
  state: () => ({
    searchParams: {
      page_no: 1,
      page_size: import.meta.env.VITE_PAGE_SIZE as number,
      cert_key: import.meta.env.VITE_SEOJI_API_KEY as string,
      result_style: 'json',
      deposit_yn: 'N',
      order_by: 'DESC',
      sort: 'PUBLISH_PREDATE',
      publisher: ''
    } as SearchParams
  })
})
