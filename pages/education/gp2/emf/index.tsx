import Link from 'next/link';
import style from '@/styles/general.module.css';
import EmfEx from '@/pages/exercises/gp2/emfex';
import Helpful from '@/pages/components/helpful';

const Emf = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electromagnetic Force
            </h1>
            {/* induction experiments 
            faradays law 
            lenz' law 
            motional electromotive force 
            induced electric fields 
            eddy currents 
            displacement current and maxwells equations 
            superconductivity

            faraday and lenz law 
            induction and energy transfers 
            induced e fields 
            inductors and inductance 
            self-induction 
            rl circuits 
            energy stored in a magnetic field 
            energy density of a mag field 
            mutual induction  */}

            <EmfEx />
            <Helpful />
        </>
    );
}

export default Emf;