import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';  
 import Image from 'next/image'; 
 import style from '@/styles/general.module.css'; 
  
 const Equat = () => { 

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
            <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Data
            </h1> 
            <p> 
                The cosmological constant is about {"\\( \\approx \\ 10^{-35} \\ s^{-2}  \\)"} 
            </p> 

        </> 
    ); 
} 

export default Equat;
