import Link from 'next/link';
import style from '@/styles/general.module.css';
import CvarEx from '@/pages/exercises/cm2/cvarex';
import Helpful from '@/pages/components/helpful';

const Cvar = () => {
    return (
        <>
            <Link href="/education/cm2" className={style.backtoLink}>Class Mech 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Math background
            </h1>
            <h2>
                1. Configuration space
            </h2>
            <h3>
                1.1 Q and p space
            </h3>
            <h2>
                2. Constraints
            </h2>
            <h2>
                3. Calculus of variations
            </h2>
            <h3>
                3.1 Variational principle
            </h3>
            {/* two examples 
            euler l equation 
            applications of euler l equation 
            more than two variables 

            constraints 
            d'alemberts principle and lagrange eq.
            techniques 
            derivation of lagrange's eq from hamiltons principle 

            constraints and constraint forces 
            generalised coordinates 
            configuration space 
            d'alemberts principle 
            lagranges equations 
            systems with moving constraints 
            the lagrangian 
            the energy function h 
            generalised momenta 
            symmetry and cons principles 
            some typical min problems 
            euler l eq. 
            variational principles 
            hamiltons prin.  */}
            <CvarEx />
            <Helpful />
        </>
    );
}

export default Cvar;