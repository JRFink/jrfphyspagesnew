import Link from 'next/link';
import style from '@/styles/general.module.css';
import LeqEx from '@/pages/exercises/cm2/leqex';
import Helpful from '@/pages/components/helpful';

const Leq = () => {
    return (
        <>
            <Link href="/education/cm2" className={style.backtoLink}>Class Mech 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Lagrange&apos;s Equations
            </h1>
            <h2>
                1. From variational to Euler-Lagrange
            </h2>
            <h2>
                2. Examples
            </h2>
            <h2>
                What path does it take?
            </h2>
            {/* lagranges equations for unconstrained motion 
            constrained systems, an example 
            constrained systems in general 
            proof of lagranges equations with constraints 
            examples of lagranges equations 
            generalized momenta and ignorable coordinates 
            conclusion 
            more about cons laws 
            lagranges equations with b forces 
            lagrange multiplier and constraint forces 

            d'alemberts principle and lagranges equations 

            lagrangian for unconstrained systems 
            lagrangian for constrained systems 
                some examples of the use of lagrangians 
            hamiltons principle 

            constraints and constrained forces 
            generalised coordinates 
            config space 
            d'alemberts principle 
            lagranges equations 
            systems with moving constraints 
            the lagrangian 
            the energy function h 
            generalised momenta 
            symmetry and conservation principles 
            minimisation problems 
            euler-lagrange equation */}


            <LeqEx />
            <Helpful />
        </>
    );
}

export default Leq;