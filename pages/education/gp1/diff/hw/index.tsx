import Link from 'next/link';
import style from '@/styles/general.module.css';

const DiffHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Differential equations hw
            </h1>
            <p>
                <ul>
                    <li>First order</li>
                    <li>Second order</li>
                </ul>
            </p>
        </>
    );
}

export default DiffHw;