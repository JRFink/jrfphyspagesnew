import Link from 'next/link';
import style from '@/styles/general.module.css';

const Vid = () => {
    return (
        <>
            <br />
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link>
            <h1 className={style.centerText}>
                Videos
            </h1>
        </>
    );
}

export default Vid;