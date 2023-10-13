import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hwheader = () => {
    return (
        <>
            <br />
            <Link href="/education/em1/hw" className={style.backtoLink} id="head">Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Electrostatics hw
            </h1>
            
        </>
    );
}

export default Hwheader;