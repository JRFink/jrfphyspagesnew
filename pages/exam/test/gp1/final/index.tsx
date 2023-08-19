import Link from 'next/link';
import style from '@/styles/general.module.css';


const Final = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 4</h1>
        </>
    );
}

export default Final;