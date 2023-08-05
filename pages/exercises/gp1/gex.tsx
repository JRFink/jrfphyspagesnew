import style from '@/styles/general.module.css';
import { useState } from 'react'
 
const GEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <h2>
            Exercises
        </h2>
        <ol>
            <li>
                Try to draw gravity 
            </li>
            <br></br>
            <li>
                Consider a gravitational field whose acceleration is 20 m/s^2. 
                A student drops a particle from rest in the field. 
                What is its velocity after 4 seconds? 
            </li>
        </ol>

        
        <input type='text'></input> m/s
      <p>Hm times {count}</p>
      <button onClick={() => setCount(count + 1)} className={style.greenButton}>Check answer</button>
    </div>
  );
}

export default GEx;