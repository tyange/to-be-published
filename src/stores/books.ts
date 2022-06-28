import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "books",
  state: () => ({
    books: [],
  }),
  getters: {},
  actions: {},
});
