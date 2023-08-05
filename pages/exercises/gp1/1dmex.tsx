
import style from '@/styles/general.module.css';
import { useState } from 'react'
 
const OnedmEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <h2>
            Exercises
      </h2>
        <h3>
            What is the final position?
        </h3>
        <p>
            Consider a particle at position 0 meters on the x axis. Its velocity is 0 m/s. What is its final position after 3 s ?
        </p>
        <input type='text'></input> m.
      <p>Hm times {count}</p>
      <button onClick={() => setCount(count + 1)} className={style.greenButton}>Check answer</button>
    </div>
  );
}

export default OnedmEx;