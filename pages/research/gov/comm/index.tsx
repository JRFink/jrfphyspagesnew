import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Comm = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Communication
            </h1>
            <br />
            <p>
                Below you will find some info about communication around the globe. 
            
            </p>
        </>
    );
}

export default Comm;