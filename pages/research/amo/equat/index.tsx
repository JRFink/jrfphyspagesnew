import Link from 'next/link'; 
import Image from 'next/image';
import stmeq from '@/public/images/stmeq.png';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Equations
            </h1>
            <p>
                Below you will find the equations you will use in AMO. 
            </p>
            
        </>
    );
}

export default Equat;