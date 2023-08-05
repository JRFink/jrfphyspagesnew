import Link from 'next/link';
import style from '@/styles/general.module.css';
import BmatEx from '@/pages/exercises/em1/bmatex';
import Helpful from '@/pages/components/helpful';

const MagMatter = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Magnetic Fields in Matter
            </h1>
            <BmatEx />
            <Helpful />
        </>
    );
}

export default MagMatter;