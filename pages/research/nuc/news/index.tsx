import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                News
            </h1>
            <br />
            <p>
                You can find some of the latest research <a href="https://journals.aps.org/prc/">here</a>.  
            </p>
           
        </>
    );
}

export default News;
