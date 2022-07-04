<script setup lang="ts">
import { ref } from "vue";
import { useBooksStore } from "@/stores/books";
import FormGuide from "@/components/FormGuide.vue";

const store = useBooksStore();

const now = new Date();

// isbn, title, series_title, publisher, author
const selectedKeywordType = ref("publisher");

// string
const enteredKeyword = ref("");

// date
const enteredStartingDate = ref(now.toISOString().slice(0, 10));
const enteredEndDate = ref(
  new Date(now.setFullYear(now.getFullYear() + 1)).toISOString().slice(0, 10)
);

// "ASC", "DESC"
const selectedOrderBy = ref("DESC");

// "PUBLISH_PREDATE", "INPUT_DATE", "INDEX_TITLE", "INDEX_PUBLISHER"
const selectedSort = ref("PUBLISH_PREDATE");

// "Y", "N"
const isEbook = ref("N");

const submitToSeojiAPI = (e: Event) => {
  e.preventDefault();

  store.fetchBooks({
    enteredKeyword: enteredKeyword.value,
    selectedKeywordType: selectedKeywordType.value,
    enteredStartingDate: enteredStartingDate.value,
    enteredEndDate: enteredEndDate.value,
    selectedOrderBy: selectedOrderBy.value,
    selectedSort: selectedSort.value,
    isEbook: isEbook.value
  });
};
</script>
<template>
  <form v-on:submit="submitToSeojiAPI" class="flex flex-col gap-6 py-10 px-16 border border-blue-200 rounded-xl">
    <fieldset>
      <div class="flex items-center mb-3 gap-2">
        <legend class="text-gray-400">
          키워드
        </legend>
        <FormGuide guide-for="keyword" />
      </div>
      <div class="flex justify-between">
        <select name="keyword-type" v-model="selectedKeywordType" class="text-sm">
          <option value="isbn">ISBN</option>
          <option value="title">제목</option>
          <option value="series_title">
            시리즈명
          </option>
          <option value="publisher">
            출판사명
          </option>
          <option value="author">
            저자명
          </option>
        </select>
        <input type="text" v-model="enteredKeyword" class="border rounded-md w-3/4">
      </div>
    </fieldset>
    <fieldset>
      <div class="flex items-center mb-4 gap-2">
        <legend class="text-gray-400">
          출판예정일
        </legend>
        <FormGuide guide-for="pre-publish" />
      </div>
      <div class="flex gap-5">
        <div class="flex items-center gap-5">
          <label for="pre-publishing-start-date" class="text-sm">
            시작
          </label>
          <input type="date" name="pre-publishing-start-date" v-model="enteredStartingDate">
        </div>
        <div class="flex items-center gap-5">
          <label for="pre-publishing-end-date" class="text-sm">
            끝
          </label>
          <input type="date" name="pre-publishing-end-date" v-model="enteredEndDate">
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div class="flex flex-col gap-3">
        <div class="flex items-center mb-1 gap-1">
          <label for="sort" class="text-gray-400">
            정렬 기준
          </label>
        </div>
        <select name="sort" v-model="selectedSort" class="text-sm">
          <option value="PUBLISH_PREDATE">출간예정일</option>
          <option value="INPUT_DATE">서지 정보 등록 날짜</option>
          <option value="INDEX_TITLE">도서명</option>
          <option value="INDEX_PUBLISHER">출판사명</option>
        </select>
      </div>
    </fieldset>
    <fieldset>
      <div class="flex flex-col gap-3">
        <div class="flex items-center mb-1 gap-1">
          <label for="order-by" class="text-gray-400">
            정렬 방식
          </label>
        </div>
        <select name="order-by" v-model="selectedOrderBy" class="text-sm">
          <option value="ASC">오름차순</option>
          <option value="DESC">내림차순</option>
        </select>
      </div>
    </fieldset>
    <fieldset>
      <div class="flex items-center gap-20">
        <div class="flex items-center gap-4">
          <label for="ebook" class="text-gray-400">
            전자책
          </label>
          <input type="radio" name="ebook" v-model="isEbook" value="Y">
        </div>
        <div class="flex items-center gap-4">
          <label for="ebook" class="text-gray-400">
            종이책
          </label>
          <input type="radio" name="ebook" checked v-model="isEbook" value="N">
        </div>
      </div>
    </fieldset>
    <button class="rounded-md shadow-sm w-full p-3 bg-blue-100 hover:bg-blue-300 transition-all">
      검색
    </button>
  </form>
</template>