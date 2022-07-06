<template>
  <details open="true">
    <summary>
      <p class="text-xl italic text-center">
        출간예정도서 검색기
        <span class="text-xs not-italic hidden text-gray-400">
          (클릭하면 접힙니다)
        </span>
      </p>
    </summary>
    <p class="mt-3 text-sm p-2 md:text-base">
      국립중앙도서관의 서지 정보 Open API를 이용한 출간예정도서 검색기입니다.<br>모든 서지 정보는 출판사의 권한으로 입력되며, 국립중앙도서관 납본 여부에 따라 출간 여부가 달라집니다. 따라서 납본이 된
      도서도 검색될 수 있으며, 서지정보 API에 등록되어 검색되는 도서라도 출간이 되지 않을 수 있습니다. 자세한 출간 일정은 해당 출판사로 문의하시기 바랍니다.
    </p>
  </details>
</template>

<style>
details {
  width: 31rem;
  word-break: keep-all;
}

details summary::marker {
  display: none;
  content: "";
}

details summary::-webkit-details-marker {
  display:none;
}

details[open] summary p span {
  display: inline;
}
</style>