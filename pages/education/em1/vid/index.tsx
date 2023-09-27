import Link from 'next/link';
import style from '@/styles/general.module.css';

const Vid = () => {
    return (
        <>
            <br />
            <Link href="/education/em1" className={style.backtoLink}>E and m 1</Link>
            <h1 className={style.centerText}>
                Videos
            </h1>
        </>
    );
}

export default Vid;