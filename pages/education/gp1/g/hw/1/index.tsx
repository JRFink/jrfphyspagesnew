import Link from 'next/link';
import style from '@/styles/general.module.css';

const G1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Gravity hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/g/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/g/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/g/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/g/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/g/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Gravitational field</li>
                    <li>Gravitational force</li>
                    <li>Gravitational potential</li>
                    <li>Gravitation near earth&#39;s surface</li>
                    <li>Gravitation at distance of satellites</li>
                    <li>Motion of satellites</li>
                    <li>Kepler&#39;s laws</li>
                    <li>Einstein and gravity</li>
                </ul>   
            </p>
        </>
    );
}

export default G1;