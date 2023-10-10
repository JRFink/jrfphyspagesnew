import Link from 'next/link';
import style from '@/styles/general.module.css';

const OnedmHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                One dimension hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/1dm/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Position and displacement</li>
                    <li>Velocity</li>
                    <li>Speed</li>
                    <li>Acceleration</li>
                    <li>Calc examples</li>
                    <li>Free falling bodies</li>
                </ul>
            </p>
        </>
    );
}

export default OnedmHw;