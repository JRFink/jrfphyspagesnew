import { useState } from 'react'
 
const EqEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <h2>
            Exercises
        </h2>
        <ul>
            <li>
                Talk about forces and such when an object is in equilibrium.
            </li>
        </ul>
    </div>
  );
}
 
export default EqEx;