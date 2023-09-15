import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewWm } from '@/pages/components/modoverview';
import WmEx from '@/pages/exercises/gp1/wmex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Wave = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Wave Motion
            </h1>
            <br></br>
            <ModoverviewWm />
            <br></br>
            <h2 className={style.h2SectionColor} id="osc">
                1. Connection to oscillations
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="type">
                2. Types of wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="desc">
                3. Describing wave motion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="en">
                4. Energy in waves
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="wave">
                5. Wave equation
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="sup">
                6. Superposition
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <WmEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/theat" className={style.backtoLink}>Temperature &#38; heat &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Wave;