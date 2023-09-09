import { useState } from 'react';
import style from '@/styles/general.module.css';

const Sorry = () => { 

return (
 
    <> 
      <p className={style.centerText}>
         Sorry, incorrect number. Try again.
      </p>
    </> 

); 

} 

const Member = () => { 

const [numberCorrect, setNumberCorrect] = useState(false);
 
 return ( 
 <>
  <h1 className={style.centerText}>
    Members 
  </h1> 
   <p className={style.centerText}>
   Welcome to the members page!
<br /> 
Enter your access number here... 
   </p>
 /* 
const 

*/ 
 </>
  );

} 

export default Member;
