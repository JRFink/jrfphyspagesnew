import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hist = () => {
    return (
        <>
            <br />
            <Link href="/education/topics/hop2" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                More historical survey
            </h1>
        </>
    );
}

export default Hist;