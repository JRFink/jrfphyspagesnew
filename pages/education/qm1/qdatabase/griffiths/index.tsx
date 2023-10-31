import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Griffith = () => {

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
            <Link href="/education/qm1/qdatabase" className={style.backtoLink}>Questions</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Griffiths 3rd edition &#169;
            </h1>
            
            <h2>
                Chapter 1
            </h2>
            {/* <p>
                Problem 1.4
                <p>
                    At time t = 0 a particle is represented by the wave function 
                    {"\\( \\Psi(x, 0) = \\begin{cases} A(x/a), & : 0 \\le x \\le a, \\ A(b - x)/(b - a), & : a \\le x < \\le b, \\ 0, otherwise, \\end{cases} \\)"} 
                    
                    <br />
                </p>
            </p> */}
            <p>
                Problem 1.5
                <p>
                    Consider the wave function 
                    {"\\( \\Psi(x, t) = A e^{- \\lambda \\vert x \\vert } e^{-i \\omega t} \\)"}, 
                    <br />
                    where <em>A, &#955;,</em> and <em> &#969;</em> are positive real constants. &#40;We&#39;ll see in 
                    Chapter 2 for what potential <em>V</em> this wave function satisfies the Schrodinger equation.&#41;
                    <br />
                    <br />
                    <b>&#40;a&#41;</b> Normalize {"\\( \\Psi \\)"}. 
                    <br />
                </p>
            </p>
            
        </>
    );
}

export default Griffith;