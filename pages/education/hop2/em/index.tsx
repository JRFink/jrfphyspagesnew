import Link from 'next/link'
import style from '@/styles/general.module.css';

const Em = () => {
    return (
       <>
        <br />
        <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link>
            <h1 className={style.centerText}>
                Development of electromagnetism
            </h1>
            <h2 className={style.numberLink}>
                3.1
            </h2>
            <Link href="/education/hop2/em/elec" className={style.generalLink}>
                Electric force
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.2
            </h2>
            <Link href="/education/hop2/em/mag" className={style.generalLink}>
                Magnetic force
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3.3
            </h2>
            <Link href="/education/hop2/em/max" className={style.generalLink}>
                Maxwell&#39;s equations
            </Link>
       </> 
    );
}

export default Em; 