import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);

  const [user, setUser] = useState({name:"",age:undefined,count:undefined});

  const updateName = (event) => {
    setName(event.target.value);
  }

  const fetchAge = () => {

    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    })
  }

  return (
    <div className="App">
      <input onChange={updateName} placeholder="Enter name"></input>
      <button onClick={fetchAge}>Predict</button>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Count: {user.count}</h1>
    </div>
  );
}

export default App;
