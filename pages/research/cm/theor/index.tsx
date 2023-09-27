import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/cm" className={style.backtoLink}>Condensed matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Condensed matter theory
            </h1>
            <br />
            <p>
                Below you will find some theories for condensed matter. 
            </p>
            <br />
        </>
    );
}

export default Theor;
