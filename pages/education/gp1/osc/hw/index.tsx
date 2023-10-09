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

export default OscHw;