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

react useState에 대하여
---------------------------------
그냥 자바스크립트 데이터 저장하실 땐 변수에 저장하셔도 되지만 
자주 바뀌는 중요한 데이터일 경우 useState 함수를 써서 state에 저장하십시오.

그 이유는 
1. state 데이터들은 갑자기 변경되면 HTML에도 알아서 변경사항이 반영됩니다 (자동 재렌더링이 됩니다)
2. 그러면 새로고침 없이도 HTML을 갈아치워 보여주는 웹앱같은 사이트를 만들 수 있음

입니다. 웹앱처럼 만들기 싫거나 자주 변경되지 않는 데이터를 저장하고 싶으면 그냥 var let const 변수쓰시구얌 

1. 그냥 원하는 버튼에 onClick={ 클릭하면실행할함수 } 넣으시면 됩니다.
2. 그리고 버튼 눌렀을 때 state 변경하시고 싶으면 setState 이런게 아니라 따봉변경() 이라는 state 만들 때 같이 만들었던 함수를 쓰시면 됩니다. 
3. 함수는 요즘 스타일로 화살표함수 넣는게 이쁨

4. 그리고 터미널에 뜨는 노란색 문법 warning 제거하고 싶으면 원하는 js 파일 맨 위에 /*eslint-disable*/ 넣으시면 됩니다. 

react useState 변경함수
------------------------------
0. 일단 상단에 useState가 잘 import 되어있는지 확인하시고
1. useState만들 때 함께 만들어놨던 따봉변경() 글제목변경() 이런 함수를 쓰시면 됩니다.
2. 근데 array 자료라면 그냥 대충 등호 이런걸로 변경하면 안되고 사본을 만들어서 그걸 변경하셔야합니다.
3. 사본 만드는 법은 let newArray = [...기존state이름] 이렇게 만드신 다음 newArray를 수정해서 글제목변경(newArray) 이렇게 하셔야 제대로 state 변경이 가능합니다.
4. 이걸 글로 설명하면 어려우니 영상제작한것임 영상보셈 
5. state 복사시 deepcopy로 이용해야함