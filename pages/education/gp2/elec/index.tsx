import Link from 'next/link';
import style from '@/styles/general.module.css';
import ElecEx from '@/pages/exercises/gp2/elecex';
import Helpful from '@/pages/components/helpful';

const Elec = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electric Charge, Force, and Field 
            </h1>
            <h2>
                1. Electric charge
            </h2>
            <h3>
                1.1 Charge is conserved
            </h3>
            <h3>
                1.2 Charge is quantized 
            </h3>
            <h3>
                1.3 Conductors, insulators, induced charge
            </h3>
            <h2>
                2. Electric force 
            </h2>
            <h3>
                2.1 Coloumb&apos;s law 
            </h3>
            <h3>
                2.2 Force on a charge
            </h3>
            <h3>
                2.3 Force on a dipole 
            </h3>
            <h2>
                3. Electric field
            </h2>
            <h3>
                3.1 Due to a point charge
            </h3>
            <h3>
                3.2 Due to a dipole
            </h3>
            <h3>
                3.3 Due to a line charge 
            </h3>
            <h3>
                3.4 Due to a charged disc 
            </h3>
            <h2>
                4. Examples
            </h2>     
            <ElecEx />
            <Helpful />
        </>
    );
}

export default Elec;