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
            <h2 className={style.numberLink}>
                3
            </h2>
            <h2 className={style.h3text}>
                Electric Potential
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\Delta V = \\frac{\\Delta U}{q} = - \\int E \\cdot dl \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                4
            </h2>
            <h2 className={style.h3text}>
                Electrostatic Energy and Capacitors
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( C = \\frac{Q}{\\Delta V}  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                5
            </h2>
            <h2 className={style.h3text}>
                Electric Current
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                6
            </h2>
            <h2 className={style.h3text}>
                DC Circuits
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                7
            </h2>
            <h2 className={style.h3text}>
                Magnetic Field and Force
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                8
            </h2>
            <h2 className={style.h3text}>
                Electromagnetic Induction
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                9
            </h2>
            <h2 className={style.h3text}>
                AC Circuits
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                10
            </h2>
            <h2 className={style.h3text}>
                Electromagnetic Waves
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                11
            </h2>
            <h2 className={style.h3text}>
                Maxwell&#39;s Equations
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                12
            </h2>
            <h2 className={style.h3text}>
                Images
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                13
            </h2>
            <h2 className={style.h3text}>
                Interference
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                14
            </h2>
            <h2 className={style.h3text}>
                Diffraction
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(  \\)"}</div>
                </div>
            <br />
            <br />
        </>
    );
}

export default Equat;