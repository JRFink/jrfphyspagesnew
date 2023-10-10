import Link from 'next/link';
import style from '@/styles/general.module.css';

const Fluid1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Fluids hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/fluid/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/fluid/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/fluid/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/fluid/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/fluid/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Fluids</li>
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

export default Fluid1;