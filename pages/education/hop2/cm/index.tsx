import Link from 'next/link'
import style from '@/styles/general.module.css';

const Cm = () => {
    return (
       <>
        <br />
        <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
        <h1 className={style.centerText}>
            Development of classical mechanics
        </h1>
            <h2 className={style.numberLink}>
                2.1
            </h2>
            <Link href="/education/hop2/cm/newt" className={style.generalLink}>
                Newton
            </Link>
            <br />
            <h2 className={style.numberLink}>
                2.2
            </h2>
            <Link href="/education/hop2/cm/lagr" className={style.generalLink}>
                Lagrange
            </Link>
            <br />
            <h2 className={style.numberLink}>
                2.3
            </h2>
            <Link href="/education/hop2/cm/ham" className={style.generalLink}>
                Hamilton
            </Link>
       </> 
    );
}

export default Cm; 