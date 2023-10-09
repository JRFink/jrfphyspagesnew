import Link from 'next/link';
import style from '@/styles/general.module.css';

const NlawHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Newton&#39;s laws hw
            </h1>
            <p>
                <ul>
                    <li>First law</li>
                    <li>Second law</li>
                    <li>Forces and momentum</li>
                    <li>Forces and mass</li>
                    <li>Single forces</li>
                    <li>Superposition of forces</li>
                    <li>Third law</li>
                    <li>Free body diagrams</li>
                </ul>
            </p>
        </>
    );
}

export default NlawHw;