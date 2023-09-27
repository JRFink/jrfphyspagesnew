import Link from 'next/link'; 
import Image from 'next/image';
import stmeq from '@/public/images/stmeq.png';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                AMO news
            </h1>
            <br />
           
        </>
    );
}

export default News;