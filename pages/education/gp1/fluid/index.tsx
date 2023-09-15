import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewFluid } from '@/pages/components/modoverview';
import FluidEx from '@/pages/exercises/gp1/fluidex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Fluid = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Fluids
            </h1>
            <ModoverviewFluid />
<br /> 
<p>
      Moving from gravity we proceed to fluids. Fluid motion is complicated, but we can use some idealized models to make it easier. 
</p>
<br /> 
            <h2 className={style.h2SectionColor} id="fluid">
                1. Fluids, density, and pressure
            </h2>
                <p>
                    Fluids...
                </p>
                <h3 className={style.h3num}>
                    1.1 
                </h3>
                <h3 className={style.h3text}>
                    Types of fluid
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Types...
                    </h4>
                <h3 className={style.h3num}>
                    1.2 
                </h3>
                <h3 className={style.h3text}>
                    Density
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.2.1 Density
                    </h4>
                <h3 className={style.h3num}>
                    1.3 
                </h3>
                <h3 className={style.h3text}>
                    Pressure
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.3.1 Pascal&#39;s law
                    </h4>
            <h2 className={style.h2SectionColor} id="buoy">
                2. Buoyancy
            </h2>
                <p>
                    Buoyancy...
                </p>
                <h3 className={style.h3num}>
                    2.1 
                </h3>
                <h3 className={style.h3text}>
                    Archimede&#39;s principle
                </h3>
                    <h4>
                        &nbsp; &nbsp; 2.1.1 Principle...
                    </h4>
            <h2 className={style.h2SectionColor} id="mot">
                3. Fluids in motion
            </h2>
                <p>
                    Fluids...
                </p>
                <h3 className={style.h3num}>
                    3.1 
                </h3>
                <h3 className={style.h3text}>
                    Continuity equation
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Continuity...
                    </h4>
                <h3 className={style.h3num}>
                    3.2
                </h3>
                <h3 className={style.h3text}>
                    Bernoulli&#39;s equation
                </h3>
                    <h4>
                        &nbsp; &nbsp; 3.1.1 Bernoulli...
                    </h4>
            <h2 className={style.h2SectionColor} id="visc">
                4. Viscosity 
            </h2>
            <br></br>
            <br></br>
            <FluidEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/osc" className={style.backtoLink}>Oscillations &#10140;</Link>  
             <br />  
             <br />            <Helpful />
        </>
    );
}

export default Fluid;