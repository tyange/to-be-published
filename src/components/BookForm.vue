<script setup lang="ts">
import { ref } from "vue";
import { useBooksStore } from "@/stores/books";

const store = useBooksStore();

const now = new Date();

// isbn, title, series_title, publisher, author
const selectedKeywordType = ref("publisher");

// string
const enteredKeyword = ref("");

// date
const enteredStartingDate = ref(now.toISOString().slice(0, 10));
const enteredEndDate = ref(new Date(now.setFullYear(now.getFullYear() + 1)).toISOString().slice(0, 10));

// "ASC", "DESC"
const selectedOrderBy = ref("DESC");

// "PUBLISH_PREDATE", "INPUT_DATE", "INDEX_TITLE", "INDEX_PUBLISHER"
const selectedSort = ref("PUBLISH_PREDATE");

// "Y", "N"
const isEbook = ref("N");


const logging = (e: Event) => {
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
  <form v-on:submit="logging">
    <div>
      <select name="keyword-type" v-model="selectedKeywordType">
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
      <input type="text" v-model="enteredKeyword" placeholder="검색어">
    </div>
    <div>
      <p>
        출판예정일
      </p>
      <label for="pre-publishing-start-date">
        시작
      </label>
      <input type="date" name="pre-publishing-start-date" v-model="enteredStartingDate">
      <label for="pre-publishing-end-date">
        끝
      </label>
      <input type="date" name="pre-publishing-end-date" v-model="enteredEndDate">
    </div>
    <div>
      <div>
        <label for="order-by">
          정렬 방식
        </label>
        <select name="order-by" v-model="selectedOrderBy">
          <option value="ASC">오름차순</option>
          <option value="DESC">내림차순</option>
        </select>
      </div>
      <div>
        <label for="sort">
          정렬 기준
        </label>
        <select name="sort" v-model="selectedSort">
          // "PUBLISH_PREDATE", "INPUT_DATE", "INDEX_TITLE", "INDEX_PUBLISHER"
          <option value="PUBLISH_PREDATE">출간예정일</option>
          <option value="INPUT_DATE">서지 정보 등록 날짜</option>
          <option value="INDEX_TITLE">도서명</option>
          <option value="INDEX_PUBLISHER">출판사명</option>
        </select>
      </div>
      <div>
        <fieldset>
          <legend>
            E-BOOK 여부
          </legend>
          <input type="radio" name="not-ebook" v-model="isEbook" value="N">
          <label for="not-ebook">N</label>
          <input type="radio" name="ebook" v-model="isEbook" value="Y">
          <label for="ebook">Y</label>
        </fieldset>
      </div>
    </div>
    <button>
      submit
    </button>
  </form>
</template>