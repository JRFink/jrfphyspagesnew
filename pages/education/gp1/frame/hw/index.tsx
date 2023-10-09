import Link from 'next/link';
import style from '@/styles/general.module.css';

const FrameHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                Frame hw
            </h1>
        </>
    );
}

export default FrameHw;