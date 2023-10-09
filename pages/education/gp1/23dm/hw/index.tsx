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
        </>
    );
}

export default TwodmHw;