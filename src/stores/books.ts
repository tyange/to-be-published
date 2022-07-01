import { defineStore } from "pinia";
import axios from "axios";

interface Book {
  PUBLISHER: string;
  DDC: string;
  UPDATE_DATE: string;
  EA_ADD_CODE: string;
  PUBLISHER_URL: string;
  AUTHOR: string;
  SERIES_TITLE: string;
  KDC: string;
  EDITION_STMT: string;
  BOOK_TB_CNT_URL: string;
  SET_ISBN: string;
  REAL_PUBLISH_DATE: string;
  TITLE_URL: string;
  PRE_PRICE: string;
  BOOK_INTRODUCTION_URL: string;
  DEPOSIT_YN: string;
  BOOK_SIZE: string;
  BOOK_SUMMARY_URL: string;
  EBOOK_YN: string;
  REAL_PRICE: string;
  FORM: string;
  FORM_DETAIL: string;
  PAGE: string;
  CONTROL_NO: string;
  SERIES_NO: string;
  EA_ISBN: string;
  INPUT_DATE: string;
  SET_EXPRESSION: string;
  VOL: string;
  CIP_YN: string;
  SUBJECT: string;
  BIB_YN: string;
  TITLE: string;
  PUBLISH_PREDATE: string;
  RELATED_ISBN: string;
  SET_ADD_CODE: string;
}

export const useBooksStore = defineStore({
  id: "books",
  state: () => ({
    books: [] as Array<Book>,
  }),
  getters: {
    getBooks(): Array<Book> {
      return this.books;
    },
  },
  actions: {
    async fetchBooks() {
      const res = await axios.get("https://www.nl.go.kr/seoji/SearchApi.do", {
        params: {
          page_no: 1,
          page_size: 10,
          cert_key: "07cd1b7cc009c125b620be82c2af4f40",
          result_style: "json",
          deposit_yn: "N",
          ebook_yn: "N",
          start_publish_date: "20220101",
          end_publish_data: "20230628",
          order_by: "DESC",
          sort: "PUBLISH_PREDATE",
          publisher: "문학동네",
        },
      });

      this.books = await res.data;
    },
  },
});
