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
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\nabla \\mathbf{E} = \\rho / \\epsilon_{0}  \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(1)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\nabla \\times \\mathbf{E} = - \\frac{\\partial{ \\mathbf{B}}}{\\partial{t}}  \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(2)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\nabla \\mathbf{B} = 0 \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(3)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\nabla \\times \\mathbf{B} = \\mu_{0} \\ \\mathbf{j} + \\mu_{0} \\epsilon_{0} \\frac{\\partial{\\mathbf{E}}}{\\partial{t}} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(4)"}</div>
            </div>
            <br />
            <br />
        </>
    );
}

export default Equat;