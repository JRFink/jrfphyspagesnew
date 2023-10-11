import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hwheader = () => {
    return (
        <>
            <br />
            <Link href="/education/gp2/hw" className={style.backtoLink} id="head">Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Electric current hw
            </h1>
        </>
    );
}

export default Hwheader;