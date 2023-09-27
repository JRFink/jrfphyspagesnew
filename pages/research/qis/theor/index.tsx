import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Quantum information theory
            </h1>
            <br />
            <p>
                Below you will find some theories for quantum information. 
            </p>
            <br />
        </>
    );
}

export default Theor;
