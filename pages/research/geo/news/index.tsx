import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/geo" className={style.backtoLink}>Geophysics</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Geophysics news
            </h1>
            <br />
           
        </>
    );
}

export default News;
