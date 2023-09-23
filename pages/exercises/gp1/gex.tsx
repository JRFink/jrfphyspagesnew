import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const GEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <Exerciseheading />
        <ol>
            <li>
                Try to draw gravity 
            </li>
            <br></br>
            <li> 
              Using the form of the gravitational force and Newton&#39;s 
              laws find the acceleration of a 10 kg block at earth&#39;s surface. 
              Now find the acceleration at 500 km.
            </li>
            <br />
            <li>
                Consider a gravitational field whose acceleration is 20 m/s^2. 
                A student drops a particle from rest in the field. 
                What is its velocity after 4 seconds? 
            </li>
        </ol>       
        <input type='text' className={style.inputOnLeft}></input> m/s
      <p>Hm times {count}</p>
      <button onClick={() => setCount(count + 1)} className={style.greenButtonCont}>Check answer</button>
 
    </div>
  );
}

export default GEx;