import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  let [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setNayoks(data.results))
  }, [])
  //const nayoks = [{ name: "jasim", age: 56 }, { name: "bappa", age: 45 }, { name: "manna", age: 60 }, { name: "alom", age: 35 }]
  return (
    <div className="App">
      <Counter></Counter>

      {
        
          nayoks.map(nk => <Nayok key = {nk.login.uuid} name={nk.name.title +" "+ nk.name.last} age={nk.dob.age}></Nayok>)
       
        
      }
      <header className="App-header">
      <img src= {logo} className="App-logo" alt="logo" />
 </header>
    </div>
    

  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const stateChange = () => setCount(count + 1);
  return (
    <div>
      <button onClick={stateChange} >increase</button>
      <h2>total:{count} </h2>
    </div>
  )
}

function Nayok(props) {
  return (
    <div>
      <h2>ami nayok {props.name}</h2>
      <h3>ami 10 ta movie korechi {props.age} year e</h3>
    </div>
  )
}
export default App;
