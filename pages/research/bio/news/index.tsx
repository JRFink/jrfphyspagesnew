import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/bio" className={style.backtoLink}>Biophys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Biophys news
            </h1>
            <br />
           
        </>
    );
}

export default News;
