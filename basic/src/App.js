import logo from './logo.svg';
import './App.css';
import Header from './components/Heder';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

//컴포넌트
//props
function App() {
  const num1 =10;
  const myName = 'hong';
  const student = {
    'stuName' : '자바',
    'age' : 30,
    'score' : 80
  }

  //구조분해할당
  const arr = [1,2,3];
  const arr_0 = arr[0];
  const arr_1 = arr[1];
  const arr_2 = arr[2];

  const [a,b,c]= arr;
  console.log(`a= ${a}`)

  const [a1, b1] = arr; // a1 =1, b1=2
  const [a2, b2, c2,d2] = arr;//d2 = undifined

  //객체의 구조분해할당
  const {stuName, age, score} = student;
  console.log(`stuName = ${stuName}`);

  const {age:abc} = student;
  console.log(abc)

  let test_num =10;

  function changeNum(){
    test_num =20;
  }

  // useState 사용
  // useState로 만든 변수의 값이 바뀌면 해당 변수를 선언한 컴포넌트가 재랜더링 함
  //첫번째 데이터 : useState의 소괄호 안의 데이터가 저장되는 변수
  //두번째 데이터 : 첫번째 데이터의 값을 변화시킬 함수
  let[testNum, setTestNum] = useState(10);

  function changeTestNum(){
    setTestNum(20);
  }

  return (
    <div className="App">
      <div>{test_num} / {testNum}</div>
      <div>
        <button type='button' onClick={changeNum}>클릭!</button>
        <button type='button' onClick={changeTestNum}>리액트 클릭</button>
      </div>
      <Header num1={num1} myName={myName}/>
      <Body stuInfo={student}/>
      <Footer/>
    </div>
  );
}

//연습용 컴포넌트
function TestComponent(){
  return(
    <div>연습용 컴포넌트</div>
  );
}

export default App;
