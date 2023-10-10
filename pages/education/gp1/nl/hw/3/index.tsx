import Link from 'next/link';
import style from '@/styles/general.module.css';

const Nl3 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Newton&#39;s laws hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/nl/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/nl/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/nl/hw/3" className={style.yellowLink}>3</Link>
                <br />
                <Link href="/education/gp1/nl/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/nl/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 3
            </p>
        </>
    );
}

export default Nl3;