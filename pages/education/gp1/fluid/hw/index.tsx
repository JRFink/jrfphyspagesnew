import Link from 'next/link';
import style from '@/styles/general.module.css';

const FluidHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Fluid hw
            </h1>
            <p>
                <ul>
                    <li>Fluid</li>
                    <li>Density</li>
                    <li>Pressure</li>
                    <li>Pascal&#39;s law</li>
                    <li>Buoyancy</li>
                    <li>Archimedes principle</li>
                    <li>Continuity equation</li>
                    <li>Bernoulli&#39;s equation</li>
                    <li>Viscosity</li>
                </ul>
            </p>
        </>
    );
}

export default FluidHw;