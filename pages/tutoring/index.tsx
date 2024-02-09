import React from 'react';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Tutoring = () => { 

  return ( 
     <>
      <h1 className={style.centerText}>
        Tutoring
      </h1>
        <p>
        Schedule a tutoring appointment with me <Link href="mailto:fink.jeffr@gmail.com">here</Link>.
        </p>
     </>
  );
} 

export default Tutoring;
