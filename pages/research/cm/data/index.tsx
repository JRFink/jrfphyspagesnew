import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Equat = () => {
    return (
        <>
            <br />
            <Link href="/research/cm" className={style.backtoLink}>Condensed matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Data
            </h1>
            <p>
                Data for condensed matter research...
            </p>
            
        </>
    );
}

export default Equat;
