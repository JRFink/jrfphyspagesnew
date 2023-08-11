import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewTheat } from '@/pages/components/modoverview';
import TheatEx from '@/pages/exercises/gp1/theatex';
import Helpful from '@/pages/components/helpful';

const Theat = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Temperature and Heat
            </h1>
            <br></br>
            <ModoverviewTheat />
            <h2 className={style.h2SectionColor} id="temp">
                1. Temperature 
            </h2>
                <h3>
                    1.1 Thermometers
                </h3>
                    <h4>
                        1.1.1 Scales
                    </h4>
                <h3>
                    1.2 &#40;Advanced thermo&#41;&#42;
                </h3>
            <h2 className={style.h2SectionColor} id="zero">
                2. Zeroth and first law of thermo
            </h2>
                <h3>
                    2.1 Zeroth
                </h3>
                <h3>
                    2.2 First
                </h3>
            <h2 className={style.h2SectionColor} id="therm">
                3. Thermal expansion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="heat">
                4. Heat transfer
            </h2>
            <br></br>
            <br></br>
            <TheatEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Theat;