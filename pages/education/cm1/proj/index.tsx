import Link from 'next/link';
import style from '@/styles/general.module.css';
import ProjEx from '@/pages/exercises/cm1/projex';
import Helpful from '@/pages/components/helpful';

const Proj = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Projectiles
            </h1>
            {/* air resistance 
            linear air resistance 
            trajectory and range in a linear medium 
            quadratic air resistance 
            motion of a charge in a uniform magnetic field 
            complex exponentials 
            solution for the charge in a b field  */}
            <ProjEx />
            <Helpful />
        </>
    );
}

export default Proj;