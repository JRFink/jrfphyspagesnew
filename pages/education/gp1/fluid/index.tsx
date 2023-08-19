import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewFluid } from '@/pages/components/modoverview';
import FluidEx from '@/pages/exercises/gp1/fluidex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Fluid = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Fluids
            </h1>
            <ModoverviewFluid />
            <h2 className={style.h2SectionColor} id="fluid">
                1. Fluids, density, and pressure
            </h2>
                <h3>
                    1.1 Types of fluid
                </h3>
                <h3>
                    1.2 Density
                </h3>
                <h3>
                    1.3 Pressure
                </h3>
                    <h4>
                        1.3.1 Pascal&#39;s law
                    </h4>
            <h2 className={style.h2SectionColor} id="buoy">
                2. Buoyancy
            </h2>
                <h3>
                    2.1 Archimede&#39;s principle
                </h3>
            <h2 className={style.h2SectionColor} id="mot">
                3. Fluids in motion
            </h2>
                <h3>
                    3.1 Continuity equation
                </h3>
                <h3>
                    3.2 Bernoulli&#39;s equation
                </h3>
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
            <Helpful />
        </>
    );
}

export default Fluid;