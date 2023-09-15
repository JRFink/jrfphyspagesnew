import style from '@/styles/general.module.css';
import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
 
const NlEx = () => {
 
  return (
    <div>
        <Exerciseheading />
        <ol>
<li> 
     Newton&#39;s first law says that an object in motion will remain in motion unless acted on by another; it also states that an object at rest will remain at rest unless acted on by another. Think of a simple situation where Newton&#39;s first law doesn&#39;t hold. 
</li>
        </ol>
    </div>
  );
}

export default NlEx;