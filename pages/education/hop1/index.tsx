import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hop1 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                History of Physics 1
            </h1>
        </>
    );
}

export default Hop1;