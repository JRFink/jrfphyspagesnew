import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hist = () => {
    return (
        <>
            <br />
            <Link href="/education/hop2" className={style.backtoLink}>Hop 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                More historical survey
            </h1>
            <h2 className={style.numberLink}>
                1.1
            </h2>
            <Link href="/education/hop2/hist/stuart" className={style.generalLink}>
                Stuard period of england
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.2
            </h2>
            <Link href="/education/hop2/hist/hre" className={style.generalLink}>
                Holy roman empire
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.3
            </h2>
            <Link href="/education/hop2/hist/eng" className={style.generalLink}>
                English, scottish, and irish history
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                1.4
            </h2>
            <Link href="/education/hop2/hist/france" className={style.generalLink}>
                Napoleonic france
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.5
            </h2>
            <Link href="/education/hop2/hist/otto" className={style.generalLink}>
                Ottoman empire
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.6
            </h2>
            <Link href="/education/hop2/hist/saf" className={style.generalLink}>
                Safavid empire
            </Link>*
            <br /> 
            <h2 className={style.numberLink}>
                1.7
            </h2>
            <Link href="/education/hop2/hist/qing" className={style.generalLink}>
                Qing dynasty
            </Link>
            <br />
            <h2 className={style.numberLink}>
                1.8
            </h2>
            <Link href="/education/hop2/hist/russ" className={style.generalLink}>
                Russia
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                1.9
            </h2>
            <Link href="/education/hop2/hist/eur" className={style.generalLink}>
                Modern europe
            </Link>
        </>
    );
}

export default Hist;