Web

========

web_javascript

==============

web_javascript_01_selector
----------------------------
셀렉터 selector document.getelementById('???').??? = '???'


web_javascript_02_manipulate
----------------------------
셀렉터를 이용한 alert div 요소 css display 속성 변경

web_javascript_03_function
----------------------------
긴 문장의 코드를 한 단어로 축약할 수 있는 function 정의

web_javascript_04_parameter
----------------------------
function을 파라미터라는 것을 이용해 단순화를 가능하게 하며, 독립성도 증가시켜 코드의 효율성을 높인다.

web_javascript_05_Eventlistener
----------------------------
html 요소 안에 javascript 요소 onclick 같은 것들을 축약하기 위해서 사용함
document.getElementById('???').addEventlistener(???Event???, function(){}) 
Event는 저곳에 위치한 것을 의미하면 이벤트가 있을 시 어떤 함수의 동작을 진행한다는 의미를 가짐

web_React

==============

react 프로젝트 생성
-------------------
npx create-react-app 프로젝트명 (node.js필요) (create-react-app 패키지 설치가 안되면 오류가 남 npm -g install create-react-app을 해준다)
1. nodejs 최신버전 (최신버전이 중요) 설치하시고
2. VS code 에디터 설치하시고
3. 작업폴더 에디터로 open folder 하신다음에 
4. 에디터의 터미널열어서 npx create-react-app 프로젝트명 입력하시면 되고
5. 그거 다 되면 방금 생성된 프로젝트명 폴더를 에디터로 오픈해서
6. App.js에서 코드짜면 되고 
7. 미리보기 띄우려면 터미널 열어서 npm start 하시면 됩니다. 

react 기본적인 JSX 사용 및 문법
-------------------------------
1. class=""가 아니라 className="" 이렇게 클래스명 집어넣으셔야하고
2. {} 기호를 이용해서 주변의 자바스크립트 변수 그런걸 태그 중간중간 집어넣을 수도 있고 
3. 스타일을 넣고 싶으면 style={ 오브젝트 자료형으로 만든 스타일 } 을 집어넣으셔야합니다. 