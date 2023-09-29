import Link from 'next/link'; 
import style from '@/styles/general.module.css';
import America, { Albania } from './countComponents';

const Countr = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Countries
            </h1>
            <br />
            <p>
                Below you will find some info about different countries. 
            </p>
            <br />
            <Albania />
            <br />
            <br />
            <America />
        </>
    );
}

export default Countr;