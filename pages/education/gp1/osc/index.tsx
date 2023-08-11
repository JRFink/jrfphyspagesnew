import Link from 'next/link';
import style from '@/styles/general.module.css';
import OscEx from '@/pages/exercises/gp1/oscex';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Oscillations
            </h1>

            <br></br>
            <br></br>
            <OscEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Osc;