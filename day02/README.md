22.05.29 리액트
### 사용 에디터

vscode

### 설치 플러그인

Live Server
Korean Language Pack for Visual Studio Code
Auto Close Tag
Auto Complete Tag
Auto Import 
Auto Rename Tag

----------------------------

Reactjs code snippets
리액트 양식 자동생성 명령어 = rsc

### 명령어 실행

커맨드 창열고 npx create-react-app 프로젝트명 or yarn create react-app 프로젝트명
cd 폴더명으로 폴더 이동 후 npm start or yarn start로 브라우저 서버 실행

### 파일이동

node_modules 제외하고 복사후 해당 폴더에서 npm / 또는 yarn 명령어 실행

### JSX

JSX 영역 : javascript를 확장한 문법
주석은 {}안에 ex) {/* */}(ctrl + /) 한줄 주석x (태그 안쪽에 한줄주석 가능 
ex) 
<div //여기다 주석></div>)
한줄 이상은 div, section, article, tr ,td ,ul...
빈태그 반드시 맨뒤에 / 안쓰면 에러남(es6는 / 없음)
<Fragment></Fragment> >> <></> 그룹화 하기 위한 목적
조건문은 삼항, &&, ||로 해결 --- Test05 참고

### 컴포넌트

컴포넌트명은 반드시 첫글자가 대문자
import 참조변수(사용자정의) from '경로/경로/컴포넌트명.js' js는 생략가능

### 클래스사용법

Test4 참고

### props

Test6,7,8 참고
