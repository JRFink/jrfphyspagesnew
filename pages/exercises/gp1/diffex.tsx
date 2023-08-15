import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const DiffEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <Exerciseheading />
        <ul>
            <li>
                Find the fattest differential equation book you can and browse its contents.
            </li>
        </ul>
    </div>
  );
}
 
export default DiffEx;