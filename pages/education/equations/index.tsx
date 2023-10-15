import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equations = () => { 

    useEffect(() => {
        if (typeof window?.MathJax !== "undefined") {
            window.MathJax.typeset()
        }
    },[])

  return (
    <>
        <Script 
            src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js"
            strategy="lazyOnload"
        />
        <br />
        <Link href="/community" className={style.backtoLink}>Community</Link>
        <br />
        <br />
        <h1 className={style.centerText}>
            Equations
        </h1>
        <p>
            Here is a list of the majority of physics equations. I list when they were derived, how they were derived, 
            experimental verification, and a brief explanation. 
        </p>
        
        <div className={style.equationBox}>
            <div className={style.equation}>{"\\(x = x_{0} + vt\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(1)"}</div>
        </div>
        <ul>
            <li>Date of derivation - </li>
            <li>Method of derivation - </li>
            <li>Experimental verification - </li>
            <li>Explanation - </li>
        </ul>
    </>
  );
}

export default Equations;
