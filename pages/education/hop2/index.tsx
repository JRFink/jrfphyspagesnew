import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hop2 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                History of Physics 2
            </h1>
        </>
    );
}

export default Hop2;