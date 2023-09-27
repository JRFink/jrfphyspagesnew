import Link from 'next/link'; 
import Image from 'next/image';

import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/amo" className={style.backtoLink}>Biophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Biophys theory
            </h1>
            <br />
            <p>
                Below you will find some theories for biophys. 
            </p>
            <br />
        </>
    );
}

export default Theor;
