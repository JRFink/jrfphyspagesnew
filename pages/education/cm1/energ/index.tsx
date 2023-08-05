import Link from 'next/link';
import style from '@/styles/general.module.css';
import EnergEx from '@/pages/exercises/cm1/energex';
import Helpful from '@/pages/components/helpful';

const Energ = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Energy
            </h1>
            {/* kinetic energy and work 
            potential energy and conservative forces 
            force as athe gradient of a potential energy 
            the second condition that f be conservative 
            time dependent potential energy 
            energy for linear one dimensional systems 
            curvilinear one dimensional systems 
            central forces 
            energy of interaction of two particles 
            the energy of a multiparticle system */}
            <EnergEx />
            <Helpful />
        </>
    );
}

export default Energ;