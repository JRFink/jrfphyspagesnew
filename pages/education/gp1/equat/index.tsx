
import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
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
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                These are the equations you will use in gen phys 1. 
            </p>
            <br />
            <h2 className={style.numberLink}>
                1
            </h2>
            <h2 className={style.h3text}>
                Motion in 1 dimension
            </h2>
            <p>
                The four governing equations of motion with constant <b>a</b> are 
            </p>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(x = x_{0} + vt\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(1)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(v = v_{0} + at\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(2)"}</div>
            </div>
            <div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(x = x_{0} + v_{0}t + \\frac{1}{2} at^{2}\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(3)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(v^{2} = v_{0}^{2} + 2a\\Delta x\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(4)"}</div>
            </div>
                <br />
            <br />
            <h2 className={style.numberLink}>
                2
            </h2>
            <h2 className={style.h3text}>
                Motion in 2 and 3 dimensions
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(r = r_{0} + v_{0}t\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(5)"}</div>
                </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(v = v_{0} + at\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(6)"}</div>
            </div>
            <div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(r = r_{0} + v_{0}t + \\frac{1}{2} at^{2}\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(7)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\(v^{2} = v_{0}^{2} + 2a\\Delta r\\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(8)"}</div>
            </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                3
            </h2>
            <h2 className={style.h3text}>
                Newton&#39;s laws
            </h2>
            <br />
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\mathbf{F} = \\frac{d \\mathbf{p}}{dt} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(9)"}</div>
            </div>
      
            <br />
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( \\mathbf{F} = m \\mathbf{a} \\)"}</div>
            </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                4
            </h2>
            <h2 className={style.h3text}>
                Applying Newton&#39;s laws
            </h2>
            <br />
            <h2 className={style.numberLink}>
                5
            </h2>
            <h2 className={style.h3text}>
                Work and kinetic energy
            </h2>
            <br />
            <br /> 
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( W = \\int \\mathbf{F} \\cdot dl \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(10)"}</div>
            </div>
            <br /> 
            <div className={style.equationBox}>
                <div className={style.equation}>{"\\( W = \\Delta KE = \\frac{1}{2} mv^{2}  \\)"} </div>
            </div>
            <br /> 
             <div className={style.equationBox}> 
                 <div className={style.equation}>{"\\( P = \\mathbf{F} \\mathbf{v}  \\)"} </div> 
             </div>
            <br />  
             <div className={style.equationBox}> 
                 <div className={style.equation}>{"\\( P = \\frac{dE}{dt} \\)"} </div> 
             </div>
            <h2 className={style.numberLink}>
                6
            </h2>
            <h2 className={style.h3text}>
                Potential energy and energy conservation
            </h2>
            <br />
            <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}>{"\\( \\Delta E = 0 = \\Delta U + \\Delta K \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(11)"}</div> 
                 </div> 
                 <br />
            <br />
            <h2 className={style.numberLink}>
                7
            </h2>
            <h2 className={style.h3text}>
                Momentum, impulse, collisions
            </h2>
            <br />
            <br /> 
                  <div className={style.equationBox}>  
                      <div className={style.equation}>{"\\( \\mathbf{P} = m \\mathbf{v} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(12)"}</div>  
                  </div>  
            <br />  
              <div className={style.equationBox}>  
                  <div className={style.equation}>{"\\( \\mathbf{J} = \\int \\mathbf{F} dt = \\Delta \\overrightarrow{p} \\)"} </div>  
              </div>
            <br />
            <br />
            <h2 className={style.numberLink}>
                8
            </h2>
            <h2 className={style.h3text}>
                Rotational motion
            </h2>
            <br />
            <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>{"\\( s = r \\ \\theta \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(13)"}</div>
                </div>
                <br /> 
                <div className={style.equationBox}>
                    <div className={style.equation}>{"\\( v = r \\ \\omega \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(14)"}</div>
                </div>
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>{"\\( a = r \\ \\alpha \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(15)"}</div>
                </div> 
                <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>{"\\( a_{rad} = \\frac{v^{2}}{r} = r \\ \\omega^{2} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(16)"}</div>
                </div>
                <br />
            <br />
            <h2 className={style.numberLink}>
                9
            </h2>
            <h2 className={style.h3text}>
                Dynamics of rotational motion
            </h2>
            <br />
                <br /> 
                <div className={style.equationBox}> 
                     <div className={style.equation}>{"\\( \\mathbf{L} = \\mathbf{r} \\times \\mathbf{p} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(17)"}</div>  
                 </div> 
             <br />
                <br />
                 <div className={style.equationBox}> 
                     <div className={style.equation}>{"\\( L = I \\ \\omega \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(18)"}</div>  
                 </div> 
             <br />
            <br />
                <div className={style.equationBox}>
                    <div className={style.equation}>{"\\( \\mathbf{ \\tau } = \\mathbf{r} \\times \\mathbf{F} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(19)"}</div> 
                </div>
            <br />
                <br />  
                  <div className={style.equationBox}>  
                      <div className={style.equation}>{"\\( \\mathbf{ \\tau } = I \\ \\alpha \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(20)"}</div>   
                  </div>  
              <br />
            <h2 className={style.numberLink}>
                10
            </h2>
            <h2 className={style.h3text}>
                Equilibrium and elasticity
            </h2>
            <br /> 
            <br />
            <div className={style.equationBox}>  
            <div className={style.equation}>
                {"\\( E = \\frac{\\sigma}{\\epsilon} = \\frac{F l_{0}}{A \\Delta l} \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(21)"}</div>    
            </div> 
            <br />
            <h2 className={style.numberLink}>
                11
            </h2>
            <h2 className={style.h3text}>
                Taylor&#39;s theorem
            </h2>
            <br />
            <h2 className={style.numberLink}>
                12
            </h2>
            <h2 className={style.h3text}>
                Gravity
            </h2>
            <br />
            <br /> 
                <div className={style.equationBox}> 
                    <div className={style.equation}>

                    {"\\( \\mathbf{F} = G \\frac{m_{1} m_{2}}{r^{2}} \\hat{\\mathfrak{r}}  \\)"} 
                    &nbsp; &nbsp; &nbsp; &nbsp; {"(22)"}                    
                    </div> 
                </div> 
            <br />
                <div className={style.equationBox}> 
                    <div className={style.equation}>
                        {"\\( \\mathbf{F} = G \\frac{m_{1} m_{2}}{r^{2}} \\hat{\\mathfrak{r}} = m \\ddot{r} \\)"} 
                        &nbsp; &nbsp; &nbsp; &nbsp; {"(23)"}  
                    </div> 
                </div> 
            <br />
            <h2 className={style.numberLink}>
                13
            </h2>
            <h2 className={style.h3text}>
                Fluids
            </h2>
            <br />
            <br /> 
                  <div className={style.equationBox}>  
                      <div className={style.equation}>
                      {"\\( p_{1} + \\frac{1}{2} \\rho \\ v_{1}^{2} + \\rho \\ g \\ y_{1} = p_{2} + \\frac{1}{2} \\rho \\ v_{2}^{2} + \\rho \\ g \\ y_{2} \\)"} 
                        &nbsp; &nbsp; &nbsp; &nbsp; {"(24)"}
                        </div>  
                  </div>  
            <br />
            <h2 className={style.numberLink}>
                14
            </h2>
            <h2 className={style.h3text}>
                Oscillations
            </h2>
            <br />
            <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}> {"\\( f \\left( q \\right) = - a \\ f '' \\left( q \\right) \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(25)"} </div> 
                 </div> 
            <br /> 
            <p>
                Hooke&#39;s law
            <br />
            <br />
            </p>
                 <div className={style.equationBox}> 
                     <div className={style.equation}> 
                    { "\\( \\mathbf{F} = - k \\Delta r \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(26)"} 
                </div> 
                 </div> 
            <br />
            <h2 className={style.numberLink}>
                15
            </h2>
            <h2 className={style.h3text}>
                Waves
            </h2>
            <br />
            <br /> 
                 <div className={style.equationBox}> 
                     <div className={style.equation}>
                        { "\\( \\frac{ \\partial^{2} f}{\\partial g^{2}} = b \\frac{\\partial^{2} f}{\\partial q^{2}}\\)"} 
                        &nbsp; &nbsp; &nbsp; &nbsp; {"(27)"}
                    </div> 
                 </div> 
            <br />
            <h2 className={style.numberLink}>
                16
            </h2>
            <h2 className={style.h3text}>
                Temperature, heat, first law
            </h2>
            <br />
            <br />
                    <div className={style.equationBox}>
                        <div className={style.equation}>{"\\( \\Delta U = Q + W \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(28)"}</div>
                    </div>
            <br />
            <h2 className={style.numberLink}>
                17
            </h2>
            <h2 className={style.h3text}>
                Gases
            </h2>
            <br />
            <br />
            <h2 className={style.numberLink}>
                18
            </h2>
            <h2 className={style.h3text}>
                Second law of thermo
            </h2>
            <br />
            <br />
                 <div className={style.equationBox}> 
                                         <div className={style.equation}>{"\\( S = k \\ln( \\Omega) \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(29)"}</div>     
                 </div> 
                 <br />
            <br />
        </>
    );
}

export default Equat; 