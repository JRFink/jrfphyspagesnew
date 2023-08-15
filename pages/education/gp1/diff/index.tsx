import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewOsc } from '@/pages/components/modoverview';
import DiffEx from '@/pages/exercises/gp1/diffex';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Differential equations 
            </h1>
            <ModoverviewOsc />
                <h2 className={style.h2SectionColor} id="desc">
                    1. Types
                </h2>
                <h2>
                    2. First order &#38; second order;
                </h2>
                    <h3>
                        2.1 Simple first order example 
                    </h3>
                    <h3>
                        
                    </h3>
            <br></br>
            <br></br>
            <DiffEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Osc;