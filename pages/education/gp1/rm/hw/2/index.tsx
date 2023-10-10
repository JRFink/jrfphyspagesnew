import Link from 'next/link';
import style from '@/styles/general.module.css';

const Rm2 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Extended bodies and rotation hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/rm/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/rm/hw/2" className={style.yellowLink}>2</Link>
                <br />
                <Link href="/education/gp1/rm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/rm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/rm/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 2
            </p>
        </>
    );
}

export default Rm2;