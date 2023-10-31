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
            <p>
                Problem 1.4
                <p>
                    At time t = 0 a particle is represented by the wave function 
                    {"\\( \\Psi(x, 0) = \\begin{cases} A(x/a), & : 0 \\le x \\le a, \\ A(b - x)/(b - a), & : a \\le x < \\le b, \\ 0, otherwise, \\end{cases} \\)"} 
                    
                    <br />
                </p>
            </p> 
            <p>
                Problem 1.5
                <p>
                    Consider the wave function 
                    {"\\( \\Psi(x, t) = A e^{- \\lambda \\vert x \\vert } \\; e^{-i \\omega t} \\)"}, 
                    <br />
                    where {"\\( A, \\lambda \\)"} and {"\\( \\omega \\)"} are positive real constants. &#40;We&#39;ll see in 
                    Chapter 2 for what potential <em>V</em> this wave function satisfies the Schrodinger equation.&#41;
                    <br />
                    <br />
                    <b>&#40;a&#41;</b> Normalize {"\\( \\Psi \\)"}. 
                    <br />
                    <b>&#40;b&#41;</b> Determine the expectation value of <em>x</em> and <em>x<span><sup>2</sup></span></em>. 
                    <br />
                    <b>&#40;c&#41;</b> Find the standard deviation of x. Sketch the graph of {"\\( \\vert \\Psi \\vert^{2} \\)"},
                    as a function of <em>x</em>, and mark the points {"\\( ( \\langle x \\rangle + \\sigma ) \\)"} 
                    and {"\\( ( \\langle x \\rangle - \\sigma ) \\)"}, to illustrate the sense in which {" \\( \\sigma \\)"}
                    represents the "spread" in <em>x</em>. What is the probability that the particle would be found outside this range?
                </p>
            </p>
            <p>
                Problem 1.7
                <p>
                    Calculate {"\\( d \\langle p \\rangle/dt \\)"} <em>Answer:</em>
                    <br />
             

                    {"\\( \\frac{ d \\langle p \\rangle }{dt} = \\langle \\frac{ \\partial V }{ \\partial x}  \\rangle \\)"}.
                    <br />
                    This is an instance of Ehrenfest&#39;s theorem, which asserts that expectation values obey classical laws. 
                </p>
            </p>    
        </>
    );
}

export default Griffith;