import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Ed = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Education
            </h1>
            <br />
            <p>
                Below you will find some info about education around the globe. 
            
            </p>
        </>
    );
}

export default Ed;
