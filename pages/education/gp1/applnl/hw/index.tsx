import Link from 'next/link';
import style from '@/styles/general.module.css';

const AppnlHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                Applying newton&#39;s laws hw
            </h1>
            <p>
                <ul>
                    <li>Using the first</li>
                    <li>Using the second</li>
                    <li>Force as a function of position</li>
                    <li>Force as a function of time</li>
                    <li>Force as function of something else</li>
                    <li>Constant forces</li>
                    <li>Friction</li>
                    <li>Tension</li>
                    <li>Free-fall with approximate a</li>
                    <li>Drag force</li>
                    <li>Using the third</li>
                    <li>Circular motion</li>
                </ul>
            </p>
        </>
    );
}

export default AppnlHw;