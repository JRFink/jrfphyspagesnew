import Link from 'next/link';
import style from '@/styles/general.module.css';
import SlawEx from '@/pages/exercises/gp1/slawex';
import Helpful from '@/pages/components/helpful';

const Slaw = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Second law of Thermodynamics
            </h1>

            <br></br>
            <br></br>
            <SlawEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Slaw;