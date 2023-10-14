import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Eq = () => {

    useEffect(() => {
        if (typeof window?.MathJax !== "undefined"){
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
            <Link href="/education/therm" className={style.backtoLink}>Thermodynamics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Equations for thermodynamics...
            </p>
        </>
    );
}

export default Eq; 