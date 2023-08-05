import Link from 'next/link';
import style from '@/styles/general.module.css';
import KinEx from '@/pages/exercises/gp1/kinex';
import Helpful from '@/pages/components/helpful';

const Kin = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Kinetic Theory of Gases
            </h1>

            <br></br>
            <br></br>
            <KinEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Kin;