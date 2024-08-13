import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집' 

  // usestate는 변수 대신 쓰는 데이터 공간을 의미, 문자, 숫자, array, object가능 데이터, 데이터 변경 함수로 이루어져 있음 , app처럼 이용하기 위해 데이터 변경시에만 렌더링 하고 효율적 html렌더링가능
  // 따라서 자주 변경되는 데이터는 useState를 사용하는게 훨씬 효율적이다. 변수보다!! 변수는 항상 새로고침 렌더링이 들어감
  let [글제목,글제목변경함수] = useState(['유동석','유동석1','유동석2']);
  let [따봉,따봉변경] = useState(0)

  function 함수() {
    return ('백이면 백이다')
  }

  return (
    <div className="App">
      <div className="black_nav">
        <div>DS의 Development 블로그</div>
      </div>
      <button onClick={()=>{글제목변경함수(글제목[0]=["여자코트추천"])}}>글제목변경</button>
      <div className="list">
        <div>
          <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}} > 👍 </span> {따봉} </h3>
          {/* onclick이 아니라 onClick임 react문법 */}
          {/* react에서 eventlistner 사용 방법 예를 들어 onClick={사용 할 함수임} javascript는 함수가 아니였지만 여기는 함수임 */}
          {/* 그러면 span태그를 누를 떄 마다 useState 데이터 값을 변경하고 싶으면 어케함? => 바로 변경함수를 이때 사용한다. [state,state변경함수] */}
          <p>2024.08.09</p>
          <hr/>
        </div>
        <div>
          <h3>{글제목[1]}</h3>
          <p>2024.08.09</p>
          <hr/>
        </div>
        <div>
          <h3>{글제목[2]}</h3>
          <p>2024.08.09</p>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
