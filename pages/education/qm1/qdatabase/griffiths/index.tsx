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
                    At time t = 0 a particle is represented by the wave function {"\\( \\Psi(x, 0) = \\begin{cases} A(x/a), & : 0 \\le x \\le a, \\ A(b - x)/(b - a), & : a \\le x < \\le b, \\ 0, otherwise, \\end{cases} \\)"} <br />
                </p>
            </p> */}
            <p>
                <b>Problem 1.5</b>
                <p>
                    Consider the wave function 
                    <br />
                    <br /> {"\\( \\Psi(x, t) = A e^{- \\lambda \\vert x \\vert } \\; e^{-i \\omega t} \\)"} <br />
                    <br />
                    where {"\\( A, \\lambda \\)"} and {"\\( \\omega \\)"} are positive real constants. &#40;We&#39;ll see in 
                    Chapter 2 for what potential {"\\( V \\)"} this wave function satisfies the Schrodinger equation.&#41;
                    <br />
                    <br />
                    <b>&#40;a&#41;</b> Normalize {"\\( \\Psi \\)"}. 
                    <br />
                    <b>&#40;b&#41;</b> Determine the expectation value of <em>x</em> and <em>x<span><sup>2</sup></span></em>. 
                    <br />
                    <b>&#40;c&#41;</b> Find the standard deviation of x. Sketch the graph of {"\\( \\vert \\Psi \\vert^{2} \\)"},
                    as a function of <em>x</em>, and mark the points {"\\( ( \\langle x \\rangle + \\sigma ) \\)"} 
                    and {"\\( ( \\langle x \\rangle - \\sigma ) \\)"}, to illustrate the sense in which {" \\( \\sigma \\)"}
                    represents the &#34;spread&#34; in <em>x</em>. What is the probability that the particle would be found outside this range?
                </p>
            </p>
            <br />
            <p>
                <b>Problem 1.7</b>
                <br />
                <br />
                Calculate {"\\( d \\langle p \\rangle/dt \\)"} .<br />
                <br />

                <em>Answer:</em>
                <br />    
            </p>
                &nbsp; &nbsp; &nbsp; &nbsp;{"\\( \\frac{ d \\langle p \\rangle }{dt} = \\langle - \\frac{\\partial V }{ \\partial x } \\rangle \\)"}
            <br />
            <p>
                This is an instance of Ehrenfest&#39;s theorem, which asserts that expectation values obey classical laws. 
            </p>
            <br />
            <p>
                <b>Problem 1.8</b>
                <br />
                <br />
                Suppose you add a constant {"\\( V_{0} \\)"} to the potential energy &#40;constant means independent 
                of x as well as t&#41;. In classical mechanics, this doesn&#39;t change anything, but what about 
                <em>quantum</em> mechanics? Show that the wave function picks up a time-dependent phase factor {"\\( e^{ (-i V_{0}t / \\hbar) } \\)"}. 
                What effect does this have on the expectation value of a dynamical variable?
            </p>
            <p>
                <b>Problem 1.9</b>
                <br />
                <br />
                A particle of mass <em>m</em> has the wave function 
                <br />
                <br /> {"\\( \\Psi(x,t) = A e^{-a[ (mx^{2}/ \\hbar) + it] } \\)"} <br />
                <br />
                where {"\\( A \\)"} and {"\\( a \\)"} are positive real constants. 
                <br />
                <b>&#40;a&#41;</b> Find {"\\( a \\)"} .
                <br />
                <b>&#40;b&#41;</b> For what potential energy function {"\\( V(x) \\)"} is this a solution to the Schrodinger equation?
                <br />
                <b>&#40;c&#41;</b> Calculate the expectation values of {"\\( x, x^{2}, p, \\)"} and {"\\(  p^{2} \\)"} . 
                <br />
                <b>&#40;d&#41;</b> Find {"\\( \\sigma_{x} \\)"} and {"\\( \\sigma_{p} \\)"} . Is their product 
                consistent with the uncertainty principle?
            </p>
            <br />
            <p>
                <b>Problem 4.18</b>
                <br />
                <br />
                A hydrogen atom 
            </p>
        </>
    );
}

export default Griffith;