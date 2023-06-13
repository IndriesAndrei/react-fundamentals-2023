import { useEffect, useState } from 'react';
import './App.css'
import Count from './Count';

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // show an advice when the app start
  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{advice}</h1> 
      <button className='advice-button' onClick={getAdvice}>Get advice</button>  
      <Count count={count} />
    </>
  )
}

export default App
