import { defineStore } from 'pinia'
import axios from 'axios'
import type { SearchParams } from '@/types/searchParams'

interface Book {
  PUBLISHER: string
  DDC: string
  UPDATE_DATE: string
  EA_ADD_CODE: string
  PUBLISHER_URL: string
  AUTHOR: string
  SERIES_TITLE: string
  KDC: string
  EDITION_STMT: string
  BOOK_TB_CNT_URL: string
  SET_ISBN: string
  REAL_PUBLISH_DATE: string
  TITLE_URL: string
  PRE_PRICE: string
  BOOK_INTRODUCTION_URL: string
  DEPOSIT_YN: string
  BOOK_SIZE: string
  BOOK_SUMMARY_URL: string
  EBOOK_YN: string
  REAL_PRICE: string
  FORM: string
  FORM_DETAIL: string
  PAGE: string
  CONTROL_NO: string
  SERIES_NO: string
  EA_ISBN: string
  INPUT_DATE: string
  SET_EXPRESSION: string
  VOL: string
  CIP_YN: string
  SUBJECT: string
  BIB_YN: string
  TITLE: string
  PUBLISH_PREDATE: string
  RELATED_ISBN: string
  SET_ADD_CODE: string
}

interface InputParams {
  [key: string]: string | number
}

interface ResponseData {
  PAGE_NO: string
  TOTAL_COUNT: string
  docs: Book[]
}

export const useBooksStore = defineStore({
  id: 'books',
  state: () => ({
    isLoading: false,
    totalCount: 0,
    currentPageNumber: 0,
    books: [] as Book[],
    savedParams: {} as InputParams,
    error: null,
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
  }),
  getters: {
    getBooks(): Book[] {
      return this.books
    }
  },
  actions: {
    errorClear() {
      this.error = null
    },
    async fetchBooks(inputParams: InputParams) {
      this.errorClear()
      this.isLoading = true

      const url = 'https://www.nl.go.kr/seoji/SearchApi.do'
      const params: {
        [key: string]: string | number
      } = {
        page_no: 1,
        page_size: import.meta.env.VITE_PAGE_SIZE,
        cert_key: import.meta.env.VITE_SEOJI_API_KEY,
        result_style: 'json',
        deposit_yn: 'N',
        ebook_yn: inputParams.isEbook,
        start_publish_date: inputParams.enteredStartingDate,
        end_publish_data: inputParams.enteredEndDate,
        order_by: inputParams.selectedOrderBy,
        sort: inputParams.selectedSort
      }
      params[inputParams.selectedKeywordType] = inputParams.enteredKeyword

      this.savedParams = params

      try {
        const res = await axios.get(url, {
          params
        })

        const data: ResponseData = await res.data

        this.totalCount = parseInt(data.TOTAL_COUNT)
        this.currentPageNumber = parseInt(data.PAGE_NO)
        this.books = data.docs
        this.isLoading = false
      } catch (err: any) {
        this.isLoading = false
        console.log(err)
        this.error = err
      }
    },
    async fetchBooksByPageNo(pageNo: number) {
      this.errorClear()
      this.isLoading = true
      try {
        const params = this.savedParams

        params.page_no = pageNo

        const res = await axios.get('https://www.nl.go.kr/seoji/SearchApi.do', {
          params
        })

        const data: ResponseData = await res.data

        this.totalCount = parseInt(data.TOTAL_COUNT)
        this.currentPageNumber = parseInt(data.PAGE_NO)
        this.books = data.docs
        this.isLoading = false
      } catch (err: any) {
        this.isLoading = false
        console.log(err)
        this.error = err
      }
    }
  }
})
