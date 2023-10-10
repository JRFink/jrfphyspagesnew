import Link from 'next/link';
import style from '@/styles/general.module.css';

const Nl1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Newton&#39;s laws hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/nl/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/nl/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/nl/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/nl/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/nl/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
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

export default Nl1;