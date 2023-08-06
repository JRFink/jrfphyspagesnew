import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const EqEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <Exerciseheading />
        <ul>
            <li>
                Talk about forces and such when an object is in equilibrium.
            </li>
        </ul>
    </div>
  );
}
 
export default EqEx;