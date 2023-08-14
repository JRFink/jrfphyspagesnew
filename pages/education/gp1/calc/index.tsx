import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewCalc } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary'; 
import Helpful from '@/pages/components/helpful';

const Calc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Big calc review
            </h1>
            <p> 
This is not meant to teach you calc from yhe ground up, but it is meant to help. 
</p>
            <br></br>
            <br></br>
            <ModoverviewCalc />
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="rate">
                1. Rate of change
            </h2>
                <h3>
                    1.1 Tangents
                </h3>
                <h3>
                    1.2 Rates of change
                </h3>
                <h3>
                    1.3 Plotting rates of change
                </h3>
                <h3>
                    1.4 Adding rates of change for a certain period
                </h3>
            <h2 className={style.h2SectionColor} id="ex">
                2. Example with 1 dimensional motion
            </h2>
                <h3>
                    2.1 Adding up the changes in position
                </h3>
                <h3>
                    2.2 Adding up changes in velocity
                </h3>
            <Summary />
            <br></br>
            <Helpful />
        </>
    );
}

export default Calc;