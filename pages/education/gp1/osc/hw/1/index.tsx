import Link from 'next/link';
import style from '@/styles/general.module.css';

const Osc1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Oscillations hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/osc/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/osc/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/osc/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/osc/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/osc/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Describing oscillations</li>
                    <li>Types of oscillations</li>
                    <li>Simple harmonic</li>
                    <li>Hookes</li>
                    <li>Hookes</li>
                    <li>Pure</li>
                    <li>Damped</li>
                    <li>Forced</li>
                    <li>Resonance</li>
                    <li>Connection to circular</li>
                    <li>Energy in oscillations</li>
                    <li>Simple pendulum</li>
                    <li>Physical pendulum</li>
                </ul>
            </p>
        </>
    );
}

export default Osc1;