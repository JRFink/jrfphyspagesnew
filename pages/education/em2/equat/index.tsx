import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equat = () => {

    useEffect(() => {
        if (typeof window?.MathJax !== "undefined") {
            window.MathJax.typeset()
        }
    }, [])
    
    return (
        <>
            <Script 
                src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js"
                strategy="lazyOnload" 
            />
            <br />
            <Link href="/education/em2" className={style.backtoLink}>E and M 2</Link> 
            <br />
            <br />
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Some equations you will use in E and M 2. 
            </p>
            <div className={style.equationBox}>
                <div className={style.equation}>{""}</div>
                <div className={style.equationNumber}></div>
            </div>
        </>
    )
}