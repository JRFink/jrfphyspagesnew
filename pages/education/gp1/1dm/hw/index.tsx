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