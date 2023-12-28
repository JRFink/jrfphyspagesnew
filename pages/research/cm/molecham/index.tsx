import Link from 'next/link'; 
import Script from 'next/script';
import {useEffect} from 'react';
import style from '@/styles/general.module.css';

const MolecHam = () => {

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
            <Link href="/research/cm" className={style.backtoLink}>Condensed Matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Molecular Hamiltonians
            </h1>
<p> 
    Hamiltonian for two particle system
</p>
            <br />
            <div className={style.equationBox}>
                     <div className={style.equation}>{"\\( H_{sys} = T_{sys} + U_{sys} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"Two particle system"}</div>         
            </div>
        </>
    );
}

export default MolecHam;