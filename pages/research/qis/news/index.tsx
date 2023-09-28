import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Quantum information news
            </h1>
            <br />
            <p>
                <ul>
                    <li><Link href="https://stealthoptional.com/news/chinas-zuchongzhi-quantum-computer-is-the-most-powerful-in-the-world/" 
                       className={style.noUnder}>China beats Google&#39;s quantum computer</Link>
                    </li> 
                </ul>
                </p>
           
        </>
    );
}

export default News;
