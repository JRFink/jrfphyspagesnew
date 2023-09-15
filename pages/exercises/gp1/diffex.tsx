import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const DiffEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <Exerciseheading />
        <ol>
            <li>
                Find a differential equations book and browse its contents.
            </li>
<li> 
   Come up with a simple differential equation. 
</li> 
<li> 
Solve it. 
</li> 
        </ol>
    </div>
  );
}
 
export default DiffEx;