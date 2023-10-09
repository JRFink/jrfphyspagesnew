import Link from 'next/link';
import style from '@/styles/general.module.css';

const CalcHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Calc hw
            </h1>
        </>
    );
}

export default CalcHw;