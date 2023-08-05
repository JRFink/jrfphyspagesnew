import Link from 'next/link';
import style from '@/styles/general.module.css';
import AngmomEx from '@/pages/exercises/cm1/angmomex';
import Helpful from '@/pages/components/helpful';

const Ang = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Momentum and Angular Momentum
            </h1>
            {/* conservation of momentum 
            rockets 
            center of mass 
            angular momentum for a single particle 
            angular momentum for several particles  */}

            <AngmomEx />
            <Helpful />
        </>
    );
}

export default Ang;