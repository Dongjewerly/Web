import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집' 

  // usestate는 변수 대신 쓰는 데이터 공간을 의미, 문자, 숫자, array, object가능 데이터, 데이터 변경 함수로 이루어져 있음 , app처럼 이용하기 위해 데이터 변경시에만 렌더링 하고 효율적 html렌더링가능
  // 따라서 자주 변경되는 데이터는 useState를 사용하는게 훨씬 효율적이다. 변수보다!! 변수는 항상 새로고침 렌더링이 들어감
  let [글제목,글제목변경함수] = useState(['유동석','유동석1','유동석2']);

  function 함수() {
    return ('백이면 백이다')
  }

  return (
    <div className="App">
      <div className="black_nav">
        <div>DS의 Development 블로그</div>
      </div>
      <div className="list">
        <div>
          <h3>{글제목[0]}</h3>
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
