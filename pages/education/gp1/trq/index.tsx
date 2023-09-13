import Link from 'next/link';
import style from '@/styles/general.module.css';
import TrqVid from '@/public/videos/gp1/trq';
import TrqEx from '@/pages/exercises/gp1/trqex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Trq = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Dynamics of Rotational Motion
            </h1>
            <br></br>
            <h2>
                1. Dynamic variables
            </h2>
            <h2>
                2. Rolling 
            </h2>
            <h2>
                3. Torque
            </h2>
            <h2>
                4. Angular momentum
            </h2>
            <h3>
                4.1 Spin angular momentum
            </h3>
            <h3>
                4.2 Orbital angular momentum
            </h3>
            <br></br>
            <TrqVid />
            <br></br>
            <br></br>
            <TrqEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/eq" className={style.backtoLink}>Equilibrium &#38; elasticity &#10140;</Link>  
             <br />  
             <br />            <Helpful />
        </>
    );
}

export default Trq;