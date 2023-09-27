import Link from 'next/link';
import style from '@/styles/general.module.css';

const Vid = () => {
    return (
        <>
            <br />
            <Link href="/education/cm2" className={style.backtoLink}>Class mech 2</Link>
            <h1 className={style.centerText}>
                Videos
            </h1>
        </>
    );
}

export default Vid;