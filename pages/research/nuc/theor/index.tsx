import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Nuclear theory
            </h1>
            <br />
            <p>
                Below you will find some theories for nuclear physics. 
            </p>
            <br />
        </>
    );
}

export default Theor;
