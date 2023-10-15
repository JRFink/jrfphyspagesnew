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
        <Link href="/education" className={style.backtoLink}>Education</Link>
        <br />
        <br />
        <h1 className={style.centerText}>
            Equations
        </h1>
        <br />
        <p>
            Here is a list of a lot of physics equations. 
            <br />
            I list when they were derived, how they were derived, 
            experimental verification, and a brief explanation. 
        </p>
        <br />
        <div className={style.equationBox}>
            <div className={style.equation}>{"\\(x = x_{0} + vt\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(1)"}</div>
        </div>
        <br />
        <ul>
            <li>Date of derivation - </li>
            <br />
            <li>Method of derivation - </li>
            <br />
            <li><span className={style.highlightText}>Experimental verification -</span> </li>
            <br />
            <li>Explanation - </li>
        </ul>
        <div className={style.equationBox}>
            <div className={style.equation}>{"\\(v = v_{0} + at\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(2)"}</div>
        </div>
        <br />
        <ul>
            <li>Date of derivation - </li>
            <br />
            <li>Method of derivation - </li>
            <br />
            <li><span className={style.highlightText}>Experimental verification -</span> </li>
            <br />
            <li>Explanation - </li>
        </ul>
    </>
  );
}

export default Equations;
