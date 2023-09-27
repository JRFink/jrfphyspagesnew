import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in quantum information. 
            </p>
            
        </>
    );
}

export default Equat;
