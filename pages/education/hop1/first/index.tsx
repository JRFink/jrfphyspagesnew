import Link from 'next/link'
import style from '@/styles/general.module.css';

const First = () => {
    return (
       <>
        <br />
        <Link href="/education/hop1" className={style.backtoLink}>Hop 1</Link>
            <h1 className={style.centerText}>
                Physics in the first civilizations
            </h1>
            <br />
            <br />
            <h2 className={style.numberLink}>
                1.1
            </h2>
            <Link href="/education/hop1/first/meso" className={style.generalLink}>
                Physics in mesopotamia
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.2
            </h2>
            <Link href="/education/hop1/first/egypt" className={style.generalLink}>
                Physics in egypt
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.3
            </h2>
            <Link href="/education/hop1/first/indus" className={style.generalLink}>
                Physics in indus valley
            </Link>
       </> 
    );
}

export default First; 