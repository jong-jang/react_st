### 리액트 7일차

:siblings: 스타일 적용

  - react-bootstrap // test1
  - material // test2
  - sass/scss
  - vs확장 : vscode-styled-components = styled-components css 자동완성기능
  - styled-component와 scss 응용
<hr>
:sbilings: 구조

  - 1. css(scss) - 전체 style.css 하나를 만들고 연결 방법 (x)
    2. 폴더별로 컴포넌트분리하고 css각각 컴포넌트별로 만드는것이 좋다
        예) todos 예시 참고
        클래스명이 중복이 될 수 있다.
        .module.css 선호한다
  - index 처리 export // day07-1 폴더구조 참고
  - export 로 내보내는 컴포넌트는 {} 필요
<hr>
:siblings: localStorage

  - javascript 기능 데이터를 기억해놨다가 불러올 수 있음 => 새로고침시 추가/삭제한 데이터가 초기화되지 않는다. // day07-1 friend 참고
<hr>
:siblings: 비동기 처리

  - fetch
  - axios
  - async, await // 함수처리
  - fetch보단 axios를 좀 더 많이 쓰는 편
  - 처리속도 async가 제일 빠름
    1. axios, fetch, try~catch 중 하나 사용
  - 데이터는 한번만 불러오면 되기 때문에 useEffect [] 처리
  