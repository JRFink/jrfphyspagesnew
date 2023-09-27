import Link from 'next/link';
import style from '@/styles/general.module.css';

const Vid = () => {
    return (
        <>
            <br />
            <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link>
            <h1 className={style.centerText}>
                Videos
            </h1>
        </>
    );
}

export default Vid;