import Link from 'next/link';
import style from '@/styles/general.module.css';
import Ihvid from '@/public/videos/qm1/ihvid';

const Qm1Vid = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link>
            <h1 className={style.centerText}>Videos</h1>
            <Ihvid />
        </>
    );
}

export default Qm1Vid;