import Link from 'next/link'
import style from '@/styles/general.module.css';

const West = () => {
    return (
       <>
        <br />
        <Link href="/education/hop1" className={style.backtoLink}>Hop 1</Link>
            <h1 className={style.centerText}>
                Physics in the west
            </h1>
            <h2 className={style.numberLink}>
                2.1
            </h2>
            <Link href="/education/hop1/first/greece" className={style.generalLink}>
                Physics in greece
            </Link>
            <br />
            <h2 className={style.numberLink}>
                2.2
            </h2>
            <Link href="/education/hop1/first/rome" className={style.generalLink}>
                Physics in rome
            </Link>
            <br />
            <h2 className={style.numberLink}>
                2.3
            </h2>
            <Link href="/education/hop1/first/byz" className={style.generalLink}>
                Physics in byzantine empire
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                2.4
            </h2>
            <Link href="/education/hop1/first/hre" className={style.generalLink}>
                Physics in holy roman empire
            </Link>
       </> 
    );
}

export default West; 