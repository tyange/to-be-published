import { defineStore } from "pinia";

export const useBooksStore = defineStore({
  id: "books",
  state: () => ({
    log: "hi from pinia",
    books: [] as Array<{
      message: string;
    }>,
  }),
  getters: {
    getLog(): string {
      return this.log;
    },
    getBooks(): Array<{
      message: string;
    }> {
      return this.books;
    },
  },
  actions: {
    async fetchBooks() {
      await this.books.push({
        message: "hi",
      });
    },
  },
});
