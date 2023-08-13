import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hop1 = () => {
    return (
        <>
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                History of Physics 2
            </h1>
        </>
    );
}

export default Hop1;