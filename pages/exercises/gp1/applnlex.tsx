import style from '@/styles/general.module.css'; 
 import { useState } from 'react'; 
 import Exerciseheading from '@/pages/components/exerciseheading'; 
  
 const ApplnlEx = () => { 
  
   return ( 
     <div> 
         <Exerciseheading />    
 <ol className={style.exerciseOl}>  
             <li>Write down Newton&#39;s second law for gravity as a general second order ODE. Use p&#39;s and q&#39;s.</li> 
             <br></br> 
             <li>Solve it.</li> 
   </ol>
   </div>
 ); 
} 
 export default ApplnlEx; 
