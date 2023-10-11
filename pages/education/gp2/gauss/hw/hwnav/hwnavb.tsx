import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hwheader = () => {
    return (
        <>
            <br />
            <Link href="/education/gp2/hw" className={style.backtoLink} id="head">Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Gauss&#39; law hw
            </h1>
            
        </>
    );
}

export default Hwheader;