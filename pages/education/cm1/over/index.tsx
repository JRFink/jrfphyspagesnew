import Link from 'next/link';
import style from '@/styles/general.module.css';
import OverEx from '@/pages/exercises/cm1/overex';
import Helpful from '@/pages/components/helpful';

const Over = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Overview of classical regime
            </h1>
            <p> 
                 There are different approaches to classical mechanics. The most familiar is the Newtonian approach, learned in introductory physics. There are two other ways to approach classical systems, the lagrangian way and the hamiltonian way. All three are interrelated. 
            </p>
            <h2>
                1. Newtonian mechanics
            </h2>
            <h2>
                2. Lagrangian mechanics
            </h2>
            <h2>
                3. Hamiltonian mechanics
            </h2>
            <OverEx />
            <Helpful />
        </>
    );
}

export default Over;