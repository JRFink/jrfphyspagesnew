import Link from 'next/link';
import style from '@/styles/general.module.css';

const EqHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Equilibrium and elasticity hw
            </h1>
            <p>
                <ul>
                    <li>Forces</li>
                    <li>Torque</li>
                    <li>Elasticity</li>
                    <li>Young&#39;s modulus</li>
                </ul>
            </p>
        </>
    );
}

export default EqHw;