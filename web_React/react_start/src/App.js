import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집' 

  function 함수() {
    return ('백이면 백이다')
  }

  return (
    <div className="App">
      <div className="black_nav">
        <div className={posts} style={{color:'red', fontSize:'100px'}}>이 곳은 개발블로그 제목을 작성하는 곳 입니다.</div>
      </div>
      <img src={logo}/>
      <h4>{posts},{함수()}</h4>
    </div>
  );
}

// 기본적인 html 구현은 app.js 자바스크립트 형식으로 들어감 / index.js에서 app.js를 public에 있는
// html파일안에 들어가라고 구현되어있음
// 리액트에서는 데이터 바인딩, 서버에서 가져온 데이터나 지속적으로 바뀌는 데이터를 html안에 넣을 수 있음 너무 좋음 심지어 javascript에서 html 내용을 바꾸는 문법인 document.getElementById.('??').innerHtml='??'로 안 넣고 {} 사용하면 됨
// 변수명이나 함수를 {안에} 적음으로써 html로 가져올 수 있다 + 이미지도 가능 원래는 <img> 태그의 src를 사용하지만 리액트에서는 {} 로 해결 src, id, className등 여러 곳에 데이터 삽입 가능~
// jsx에서 style을 넣고 싶을 떄는 style = {object 자료형으로 만든 스타일}
export default App;
