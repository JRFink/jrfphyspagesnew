import style from '@/styles/general.module.css';
import { useState } from 'react';
import ExerciseHeading from '@/pages/components/exerciseheading';
 
const Two3dmEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <h2>
            Exercises
        </h2>
        {/* position and velocity vectors 
        the acceleration vector
        projectile motion 
        motion in a circle 
        relative velocity  */}

        <h3>
            Multidimensional vectors
        </h3>
        <p>
            Write down a two and then a three dimensional vector
        </p>
        <input type='text'></input> 
      <p>Hm times {count}</p>
      <button onClick={() => setCount(count + 1)} className={style.greenButton}>Check answer</button>
    </div>
  );
}

export default Two3dmEx;