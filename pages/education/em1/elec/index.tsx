import Link from 'next/link';
import style from '@/styles/general.module.css';
import ElecEx from '@/pages/exercises/em1/elecex';
import Helpful from '@/pages/components/helpful';

const Elecstatics = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electrostatics
            </h1>
            {/* electric field 
            divergence and curl of elec */}
            <ElecEx />
            <Helpful />
        </>
    );
}

export default Elecstatics;