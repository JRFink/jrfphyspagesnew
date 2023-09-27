import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/per" className={style.backtoLink}>PER</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                PER news
            </h1>
            <br />
           
        </>
    );
}

export default News;
