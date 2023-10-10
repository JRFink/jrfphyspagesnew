import Link from 'next/link';
import style from '@/styles/general.module.css';

const Calc1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Calc hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/calc/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/calc/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/calc/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/calc/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/calc/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Approximations</li>
                    <li>Rates of change</li>
                    <li>Example with 1d motion</li>
                    <li>Acceleration</li>
                    <li>Calc examples</li>
                    <li>Free falling bodies</li>
                </ul>
            </p>
        </>
    );
}

export default Calc1;