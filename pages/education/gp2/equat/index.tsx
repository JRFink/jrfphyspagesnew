import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Equat = () => {

    useEffect(() =>{
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
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in gen phys 2. 
            </p>
            <br />  
            <h2 className={style.numberLink}>
                1
            </h2>
            <h2 className={style.h3text}>
                Electric Charge, Force, and Field
            </h2>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\mathbf{E} = \\frac{k q}{r^{2}} \\mathfrak{r} \\)"}</div>
            </div>
            <br />
            <h2 className={style.numberLink}>
                2
            </h2>
            <h2 className={style.h3text}>
                Gauss&#39; Law
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\int \\mathbf{E} \\cdot dA = Q_{enc} / \\epsilon_{0}  \\)"}</div>
                </div>
            <br />
            <br />
        </>
    );
}

export default Equat;