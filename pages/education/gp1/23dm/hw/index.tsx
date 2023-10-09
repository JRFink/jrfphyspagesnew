import Link from 'next/link';
import style from '@/styles/general.module.css';

const TwodmHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                2-3 dimension hw
            </h1>
            <p>
                <ul>
                    <li>Position and displacement</li>
                    <li>Velocity</li>
                    <li>Acceleration</li>
                    <li>Projectile motion</li>
                    <li>Uniform circular motion</li>
                    <li>Relative motion</li>
                </ul>
            </p>
        </>
    );
}

export default TwodmHw;