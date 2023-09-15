import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const NlEx = () => {
 
  return (
    <div>
        <Exerciseheading />
        <ol>
<li> 
Write down the laws in your own words. 
</li> 
<li> 
     Newton&#39;s first law says that an object in motion will remain in motion unless acted on by another; it also states that an object at rest will remain at rest unless acted on by another. Think of a simple situation where Newton&#39;s first law doesn&#39;t hold. 
</li>
        </ol>
    </div>
  );
}

export default NlEx;

{ /* 


<ol className={style.exerciseOl}>
            <li>Write down the  laws in your own words</li>
            <br></br>
            <li>Write down Newton&#39;s second law for gravity as a general second order ODE. Use p&#39;s and q&#39;s.</li>
            <br></br>
            <li>Solve it.</li>
*/ } 