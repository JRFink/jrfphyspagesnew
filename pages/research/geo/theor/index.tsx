import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/geo" className={style.backtoLink}>Geophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Geophysics theory
            </h1>
            <br />
            <p>
                Below you will find some theories for geophysics. 
            </p>
            <br />
        </>
    );
}

export default Theor;
