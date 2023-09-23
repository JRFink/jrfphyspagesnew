import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
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
        <div className={style.equation}>x = x<span><sub>0</sub></span> + v t</div>
        
        <div className={style.equationNumber}>&#40;1&#41;</div>
    </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>v = v<span><sub>0</sub></span> + a t</div>
        <div className={style.equationNumber}>&#40;2&#41;</div>
   </div>
   <div>
   </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>x = x<span><sub>0</sub></span> + v<span><sub>0</sub></span> t + 1/2 a t<sup> 2</sup></div>
        <div className={style.equationNumber}>&#40;3&#41;</div>
   </div>
   <br />
   <div className={style.equationBox}>
        <div className={style.equation}>v <span><sup>2</sup></span> = v<span><sub>0</sub></span><span><sup>2</sup></span> + 2 a &#916; r</div>
        <div className={style.equationNumber}>&#40;4&#41;</div>
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
            <h2 className={style.numberLink}>
                3
            </h2>
            <h2 className={style.h3text}>
                Newton&#39;s laws
            </h2>
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
            <h2 className={style.numberLink}>
                6
            </h2>
            <h2 className={style.h3text}>
                Potential energy and energy conservation
            </h2>
            <br />
            <h2 className={style.numberLink}>
                7
            </h2>
            <h2 className={style.h3text}>
                Momentum, impulse, collisions
            </h2>
            <br />
            <h2 className={style.numberLink}>
                8
            </h2>
            <h2 className={style.h3text}>
                Rotational motion
            </h2>
            <br />
            <h2 className={style.numberLink}>
                9
            </h2>
            <h2 className={style.h3text}>
                Dynamics of rotational motion
            </h2>
            <br />
            <h2 className={style.numberLink}>
                10
            </h2>
            <h2 className={style.h3text}>
                Equilibrium and elasticity
            </h2>
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
            <h2 className={style.numberLink}>
                13
            </h2>
            <h2 className={style.h3text}>
                Fluids
            </h2>
            <br />
            <h2 className={style.numberLink}>
                14
            </h2>
            <h2 className={style.h3text}>
                Oscillations
            </h2>
            <br />
            <h2 className={style.numberLink}>
                15
            </h2>
            <h2 className={style.h3text}>
                Waves
            </h2>
            <br />
            <h2 className={style.numberLink}>
                16
            </h2>
            <h2 className={style.h3text}>
                Temperature and heat
            </h2>
            <br />
            <h2 className={style.numberLink}>
                17
            </h2>
            <h2 className={style.h3text}>
                Gases
            </h2>
            <br />
            <h2 className={style.numberLink}>
                18
            </h2>
            <h2 className={style.h3text}>
                First law of thermo
            </h2>
            <br />
            <h2 className={style.numberLink}>
                19
            </h2>
            <h2 className={style.h3text}>
                Second law of thermo
            </h2>
            <br />
        </>
    );
}

export default Equat; 