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
                    <li>
                        <Link href="https://stealthoptional.com/news/chinas-zuchongzhi-quantum-computer-is-the-most-powerful-in-the-world/" 
                            className={style.noUnder}>
                            China beats Google&#39;s quantum computer
                        </Link>
                    </li>
                    <li>
                        <Link href="https://news.stanford.edu/2021/11/29/simpler-design-quantum-computers/?utm_source=Stanford%20ALL&amp;utm_campaign=86d93c620e-EMAIL_CAMPAIGN_2021_11_05_05_55_COPY_01&amp;utm_medium=email&amp;utm_term=0_c042b4aad7-86d93c620e-54995714" 
                            className={style.noUnder}>
                            Single atom quantum computer
                        </Link>
                    </li> 
<li>Ion Q receives 
                        <Link href="https://investors.ionq.com/news/news-details/2023/IonQ-Announces-New-25.5M-Quantum-Deal-with-United-States-Air-Force-Research-Lab/default.aspx"                             className={style.noUnder}>&#36;25 million </Link> deal with Air force research lab.
                    </li>

                </ul>
                </p>
           
        </>
    );
}

export default News;
