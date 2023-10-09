import Link from 'next/link';
import style from '@/styles/general.module.css';

const OscHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Oscillations hw
            </h1>
            {/* <p>
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
            </p> */}
        </>
    );
}

export default OscHw;