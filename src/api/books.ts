import { axiosInstance } from './axiosInstance'
import type { SearchParams } from './../types/searchParams'

export const BooksAPI = {
  list: async (params: SearchParams) => {
    const res = await axiosInstance.get('https://www.nl.go.kr/seoji/SearchApi.do', { params })

    console.log(res)
  }
}
