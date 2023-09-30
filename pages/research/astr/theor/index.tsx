import Link from 'next/link'; 
import Image from 'next/image';

import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Astrophysics theory
            </h1>
            <br />
            <p>
                Below you will find some theories for astrophysics. 
            </p>
            <br />
    
                <p>
                    Behaviour &#40;size, speed, charge &#40; elec, grav &#41; &#41; ? 
                </p>
                <p> 
                    Charge is conserved and invariant; energy is conserved but not invariant; mass is not conserved but invariant? 
                </p>
        </>
    );
}

export default Theor;