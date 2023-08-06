import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const NlEx = () => {
 
  return (
    <div>
        <h2>
            Exercises
        </h2>
        <ol>
            <li>Write down the 3 laws</li>
            <br></br>
            <li>Write down the 3 laws in your own words</li>
        </ol>
    </div>
  );
}

export default NlEx;