# react_st

2022
리액트 저장소

🌱 Nodejs

  - webpack(모듈 번들러 -> 여러개로 나눠져 있는 파일을들을 하나로 만들어주는 라이브러리), babel(최신 문법을 사용가능하게 함) 등의 도구들을 실행하는데에 사용
  - yarn : 자바스크립트 패키지를 관리하기 위해서 사용 npm install --global yarn
  - 속도 npm < yarn
  - 버전은 신뢰도 높은버전 추천
<hr />
🌱 vscdoe 확장설치

  - Live Sever // 서버
  - Korean Language Pack for Visual Studio Code // 번역
  - Auto Close Tag // 자동태그 닫기
  - Auto Complete Tag // 태그 자동완성
  - Auto Import // 자동 참조주소 추가
  - Auto Rename Tag // 태그이름 수정시 자동으로 닫는태그도 변경
  - Reactjs code snippets // rsc 명령시 리액트 기본코드 자동생성
  - vscode-styled-components // styled-components css 자동완성기능
<hr />
🌱 CRA 명령어
  
  - start : React 프로젝트 개발 서버를 시작합니다.
  - build : 배포를 위해 앱을 정적파일로 번들합니다.
  - test : 테스트 러너를 시작합니다.
  - eject : 사용자 정의 구성을 직접 수행할 수 있도록 프로젝트를 준비합니다.
<hr />
🌱 props

  - props 는 properties의 줄임말
  - 부모 컴포넌트에서 자식 컴포넌트에 값을 전달할 때 자식 컴포넌트에서 부모의 값을 받아올 때
  - 하위 컴포넌트는 전달 받은 props를 읽기만 가능함(readonly)
<hr />
🌱 PropsTypes 종류

  타입                                                  검사방법
모든타입                                              PropTypes.any
Number 객체                                           PropTypes.number
String 객체                                           PropTypes.string
Boolean 객체                                          PropTypes.bool
Function 객체                                         PropTypes.func
Array 객체                                           PropTypes.array
Object 객체                                           PropTypes.object
Symbol 객체                                          PropTypes.symbol
Node 객체                                           PropTypes.node
React 요소                                          PropTypes.element
여러타입중 하나                                      PropTypes.oneOfType([propType.number,PropType.string])
특정 클래스의 인스턴스                                PropTypes.instanceOf(Date)
전달 속성 제한                                        PropTypes.oneOf(['name','career'])
특정타입 집합으로 제한                                 PropTypes.arrayOf(PropTypes)
특정타입을 속성 값으로 하는 객체 제한                   PropTypes.objectOf(PropTypes.number)
특정 형태를 갖는 객체 제한                            PropTypes.shape({prop1,prop2})

///////////// isRequired 설정은 필수로 전달 받는 속성을 말합니다.
  설정                                                    설명
PropTypes.string.isRequired                         문자형(필수)
PropTypes.number.isRequired                         숫자형(필수)
<hr />
🌱 useRef

  -
<hr />
🌱 react 젠코딩

  - 파일 > 기본설정 > 설정 window 이용자 : Ctrl +, Mac 이용자 : Command +
  - 작업영역 Include Languages 검색 addItem 부분에 key : javascript / value : javascriptreact
<hr />
🌱 useEffect

  - #메모리누수 방지
<hr />
🌱 Localstorage

  - 데이터를 추가 삭제 할경우 새로고침하면 초기화가 되는데 로컬스토리지를 사용하면 새로고침후에도 데이터를 유지시킬수 있다.
  - sectionstroage
<hr />
🌱 fetch, axios

  - 비동기처리 할 때 사용 - 서버에 있는 데이터 불러올 때
  - axios를 좀 더 주로 쓰는 편
  - 성능상으로만 보면 async await이 가장 좋음
<hr />
🌱 styled-components

  - react-bootstrap
  - material
  - module.css : 클래스명의 중복을 방지해준다.
  - sass
  - styled-jsx
  - npm 이나 yarn 으로 설치 후 사용
  - reset.css 적용법 -> https://www.npmjs.com/package/styled-reset
