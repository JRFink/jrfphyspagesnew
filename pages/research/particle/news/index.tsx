import Link from 'next/link'; 
import Image from 'next/image';
import stmeq from '@/public/images/stmeq.png';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Particle phys news
            </h1>
            <br />
            <p>
                Find some <Link href="https://journals.aps.org/prd">here</Link>.
            </p>
            <br />
        </>
    );
}

export default News;