
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
        Position and displacement
      </h3>
        <p>
            1.  Consider a particle at position 0 meters on the x axis. Its velocity is 0 m/s. What is its final position after 3 s ?
        </p>
        <input type='text'></input> m.
        <p>You pressed this {count} times</p>
        <button onClick={() => setCount(count + 1)} className={style.greenButton}>Check answer</button>
      <br></br>
      <br></br>
      <h3>
        Average velocity
      </h3>
      <h3>
        Instantaneous velocity 
      </h3>
      <h3>
        Average acceleration
      </h3>
      <h3>
        Instantaneous acceleration
      </h3>
      <h3>
        Free-fall acceleration
      </h3>
      <h3>
        Position and velocity by integration
      </h3>    
    </div>
  );
}

export default OnedmEx;