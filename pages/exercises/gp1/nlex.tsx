import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const NlEx = () => {
 
  return (
    <div>
        <Exerciseheading />
        <ol>
            <li>Write down the 3 laws in your own words</li>
            <br></br>
            <li>Write down Newton&#39;s second law for gravity as a general second order ODE. Use p&#39;s and q&#39;s.</li>
            <br></br>
            <li>Solve it.</li>
        </ol>
    </div>
  );
}

export default NlEx;