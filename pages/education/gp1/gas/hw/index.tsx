import Link from 'next/link';
import style from '@/styles/general.module.css';

const GasHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Gases hw
            </h1>
            <p>
                <ul>
                    <li>Ideal gas</li>
                    <li>Molecular theory</li>
                    <li>Adiabatic processes</li>
                </ul>
            </p>
        </>
    );
}

export default GasHw;