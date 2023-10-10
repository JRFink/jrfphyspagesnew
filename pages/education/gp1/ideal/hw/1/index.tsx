import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ideal1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Idealized models hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/ideal/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/ideal/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/ideal/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/ideal/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/ideal/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Models</li>
                </ul>
            </p>
        </>
    );
}

export default Ideal1;