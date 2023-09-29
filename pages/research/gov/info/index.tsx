import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Info = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Information
            </h1>
            <br />
            <p>
                Below you will find some info about our information sources around the globe. 
            
            </p>
        </>
    );
}

export default Info;