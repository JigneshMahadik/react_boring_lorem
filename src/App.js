import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import jsonData from "./paragraph.json"

function App() {

  const [ state, setState ] = useState(0);

  function input() {
    const input = document.getElementById("input").value;
    if(input>0 && input<=7){
      setState(parseInt(input));
    }
    else if(input>7){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
      setState(0);
    }
    else if(input<=0){
      alert("Ayyo ! you know that you wrote negative input 😵");
      setState(0);
    }
    // alert(input);
  }
  // const btnGen = ()=>{
  //   for(let i=1;i<=state;i++){
  //     console.log(i);
  //   }
  // }

  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <label>Paragraph : </label>
      <input type="number" id="input"/>
      <button onClick={input}>GENERATE</button>
      <div>
        {
          jsonData.paragraphs.slice(0,state).map((par,id)=>{
            return(
              <div>
                <br/><br/>
                <span>{id+1})</span>
                <span key={id}>{par.para}</span>
                <br/><br/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
