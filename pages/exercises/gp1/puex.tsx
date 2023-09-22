import { useState } from 'react';
import style from '@/styles/general.module.css';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const PuEx = () => {

 
  return (
    <>
      <Exerciseheading />
      <ol className={style.exerciseOl}> 
<li> 
Consider the gravitational system of the earth and the sun. The sun and earth are sometimes closer to one another and sometimes further, and their relative speeds change based upon this. Where does the energy come from when the sun and earth pick-up speed?  
</li> 
</ol> 
    </>
  );
}

export default PuEx;