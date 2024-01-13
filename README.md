# to-be-published

출간예정도서 검색기.
<br>
with Vue3, Typescript, Pinia, Tanstack-Query, Vercel 

## 배포

[https://to-be-published.vercel.app/](https://to-be-published.vercel.app/)

## 업데이트 기록

* 2024-01-13
  * Vue 3.4 적용.
  * Vite 버전 2에서 버전 5로 migration.
  * 기존에 form을 입력해서 검색하던 방식에서 출판사별로 버튼을 클릭해 검색하는 방식으로 변경.
    * 모든 출판사가 미납본 도서를 미리 등록하지 않음.
    * 일반 유저는 출간 예정 도서가 등록되는 출판사를 미리 알기 어려움. 그로 인해 아무리 검색해도 출간 예정 도서 자체가 검색되지 않는 상황이 빈번할 것으로 예상되었음.
    * 출간 예정 도서를 꾸준히 등록하는 것으로 인지할 수 있는 출판사(주로 문학 전문 출판사임) 9개를 선정하여 버튼으로 만들고 grid 형태로 표현.
    * 불필요한 form을 제거.
    * 출간 예정 도서를 등록하고 있는 출판사를 탐색해서 더 많은 출판사를 등록할 예정.
  * store에서 데이터를 fetching 하고 받은 응답 받은 데이터를 전역으로 사용하고 있었음.
    * 이를 개선하기 위해, Tanstack-Query를 도입. data-fetching과 로딩 및 에러 핸들링과 관련된 코드를 상당히 줄일 수 있었음.
    * 전역 상태로는 API에 전달할 parameters만 관리.
  * API와 관련된 코드 및 type 정의와 관련된 코드를 파일로 분리.
  * anime.js 패키지를 사용해서 staggered 효과를 추가.
  * page transition 효과를 추가.
  * 반응형 스타일링 조정.

## 만든 사람

Github: [tyange](https://github.com/tyange)
<br>
Email: [usun16@gmail.com](mailto:usun16@gmail.com)