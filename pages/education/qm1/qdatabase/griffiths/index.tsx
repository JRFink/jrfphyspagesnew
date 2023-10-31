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
                    At time <em>t = 0</em> a particle is represented by the wave function 
                    Describe two vectors {"\\( \\overrightarrow{a} \\)"} and {"\\( \\overrightarrow{b} \\)"} such that 
                    <br />
                    &#40;a&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{c} \\)"} 
                    &nbsp; and &nbsp; {"a + b = c"} 
                    <br />
                    &#40;b&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{a} - \\overrightarrow{b}  \\)"} 
                    <br />
                    &#40;c&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{c} \\)"} 
                    &nbsp; and &nbsp; {"\\( a^{2} + b^{2} = c^{2} \\)"} 
                    <br />
                </p>
            </p>
            
        </>
    );
}

export default Griffith;