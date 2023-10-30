import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Fin = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Financials
            </h1>
            <br />
            <p>
                Things cost money. Research costs money. Here are some of the financial highlights. 
                <ul>
                    <li>
                        USA <Link href="/pdf/usadoe23.pdf">Department of energy budget 2023</Link> - &#36;50 billion.
                    </li>
                </ul>
            </p>

        </>
    );
}

export default Fin;