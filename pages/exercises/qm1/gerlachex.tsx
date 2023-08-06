import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const GerlachEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Exerciseheading />
        <ol>
            <li>Explain the Stern-Gerlach experiment in your own words</li>
        </ol>
    </>
  );
}

export default GerlachEx;