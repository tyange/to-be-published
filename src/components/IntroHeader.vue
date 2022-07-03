<template>
  <details open="true">
    <summary>
      <p class="text-xl italic">
        출간예정도서 검색기
        <span class="text-xs not-italic hidden text-gray-400">
          (클릭하면 접힙니다)
        </span>
      </p>
    </summary>
    <p class="mt-3">
      국립중앙도서관의 서지 정보 Open API를 이용한 출간예정도서 검색기입니다.
    </p>
  </details>
</template>

<style>
details summary::marker {
  display: none;
  content: "";
}

details[open] summary p span {
  display: inline;
}
</style>