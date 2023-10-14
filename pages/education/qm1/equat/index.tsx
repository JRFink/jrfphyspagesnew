import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equat = () => {



    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
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
            <Link href="/education/qm1" className={style.backtoLink}>Quantum</Link>
            <h1 className={style.centerText}>
                Equations for Quantum 1
            </h1>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>{" i ℏ \\(\\frac{\\partial{Ψ}}{\\partial{t}} = \\hat{H} Ψ \\)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#123; x, p &#125; = i &#8463; </div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#8710;x&#8710;p = &#8463; / 2 </div>
            </div>
        </>
    );
}

export default Equat