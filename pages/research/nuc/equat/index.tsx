import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find some equations for nuclear physics. 
            </p>            
        </>
    );
}

export default Equat;
