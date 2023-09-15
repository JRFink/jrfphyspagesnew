import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const Two3dmEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <Exerciseheading />
        {/* position and velocity vectors 
        the acceleration vector
        projectile motion 
        motion in a circle 
        relative velocity  */}
<ol> 
<li> 
     Slide a block along frictionless ice. Define a frame that is at an angle to the direction of the ice. Characterize the motion of the ice in different directions. 
</li> 
</ol> 
      <h3>
            Multidimensional vectors
        </h3>
        <p>
            Write down a two and then a three dimensional vector
        </p>
        <input type='text' className={style.inputOnLeft}></input> 
      <p>Hm times {count}</p>
      <button onClick={() => setCount(count + 1)} className={style.greenButtonCont}>Check answer</button>
    </div>
  );
}

export default Two3dmEx;