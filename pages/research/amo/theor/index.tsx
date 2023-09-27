import Link from 'next/link'; 
import Image from 'next/image';

import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                AMO theory
            </h1>
            <br />
            <p>
                Below you will find some theories for amo physics. 
            </p>
            <br />

            
        </>
    );
}

export default Theor;