import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hwheader = () => {
    return (
        <>
            <br />
            <Link href="/education/gp2/hw" className={style.backtoLink} id="head">Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Maxwell&#39;s equations hw
            </h1>
            
        </>
    );
}

export default Hwheader;