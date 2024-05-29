import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react'
import ChildComponent from './ChildComponent';

function App() {

const [count, setcount] = useState(0);
const countRef = useRef(0);
const [value, setValue] = useState('')
let countVariable = 0;
const renderCountRef = useRef(0);
const inputRef = useRef();

const handleClick = () => {
  inputRef.current.focus();
}
// 종속성 배열이 없으면 어떤 state든 변경되면 useEffect가 실행
useEffect(() => {
renderCountRef.current++
})


const increaseRef = () => {
  countRef.current++;
  console.log("Ref +", countRef.current);
}

const increaseState = () => {
  setcount(prev => prev + 1);
}

const increaseVariable = () => {
  countVariable++;
  console.log("Var + :", countVariable);
}

  return (
    <div className="App">
      <header className="App-header">
        <p> Ref {countRef.current}</p>
        <p> State {count}</p>
        <p> Variable {countVariable}</p>
        <p> I rendered {renderCountRef.current} times</p>

        <input onChange={(e) => setValue(e.target.value)} value={value} />

        <div>
          <button onClick={increaseRef}>Ref +</button> 
          <button onClick={increaseState}>State +</button> 
          <button onClick={increaseVariable}>Variable +</button> 
        </div>    

        <br/>

        <ChildComponent ref={inputRef}/>
        <button onClick={handleClick}>클릭 </button>
      </header>
    </div>
  );
}

export default App;
