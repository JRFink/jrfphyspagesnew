import Link from 'next/link';
import style from '@/styles/general.module.css';
import { Modoverview1st } from '@/pages/components/modoverview';
import FlawEx from '@/pages/exercises/gp1/flawex';
import Helpful from '@/pages/components/helpful';

const Flaw = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                First Law of Thermodynamics
            </h1>
            <Modoverview1st />
            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Flaw;