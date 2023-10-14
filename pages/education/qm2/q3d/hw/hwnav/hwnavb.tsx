import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hwheader = () => {
    return (
        <>
            <br />
            <Link href="/education/qm2/hw" className={style.backtoLink} id="head">Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Quantum in 3d hw
            </h1>
            
        </>
    );
}

export default Hwheader;