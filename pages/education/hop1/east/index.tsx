import Link from 'next/link'
import style from '@/styles/general.module.css';

const East = () => {
    return (
       <>
       <br />
       <Link href="/education/hop1" className={style.backtoLink}>Hop 1</Link>
        <h1 className={style.centerText}>
            Physics in the east
        </h1>
        <h2 className={style.numberLink}>
                3.1
            </h2>
            <Link href="/education/hop1/east/ach" className={style.generalLink}>
                Physics in achaemenid dynasty
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.2
            </h2>
            <Link href="/education/hop1/east/warr" className={style.generalLink}>
                Physics in warring states period
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.3
            </h2>
            <Link href="/education/hop1/east/pers" className={style.generalLink}>
                Physics in persia
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                3.4
            </h2>
            <Link href="/education/hop1/east/hun" className={style.generalLink}>
                Physics in hun dynasty
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.5
            </h2>
            <Link href="/education/hop1/east/tang" className={style.generalLink}>
                Physics in tang &#38; song dynasty
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.6
            </h2>
            <Link href="/education/hop1/east/mong" className={style.generalLink}>
                Physics in mongol empire
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                3.7
            </h2>
            <Link href="/education/hop1/east/otto" className={style.generalLink}>
                Physics in ottoman empire
            </Link>
       </> 
    );
}

export default East; 