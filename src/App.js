
import { useEffect, useState } from 'react';
import './App.css';
import Slide from './Components/Slide';



function App() {
  const [data , setData] = useState([]);  
  const [countrie, setCountrie] = useState({pays:""});
  const [isNext, setIsNext] = useState(true)
  const [score, setScore] = useState(0);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all/')
    .then(res=>{
      return res.json()
    })
    .then(json=>{
      const first = json[Math.floor(Math.random()*json.length)]
      const index = json.indexOf(first);
      json.splice(index,1)
      setData(json)
      setCountrie({pays:first})
    })
  },[])

  const handleNext = (bool) =>{
    if (bool){
      const newData = [...data];
      const next = newData[Math.floor(Math.random()*newData.length)];
      const index = newData.indexOf(next);
      newData.splice(index,1);
      setData(newData);
      setCountrie({pays:next})
      setScore(score+1);
    }
    else{
      setIsNext(false)
    }
      
  }
  

  if (countrie.pays && isNext) {
    return (
      <div className='App'>
        <Slide countrie={countrie.pays} handleNext={handleNext} />
      </div>
    );
  }
  return (
    <div className='score-final'>
      SCORE FINAL : {score}
    </div>
  )


 
}

export default App;
