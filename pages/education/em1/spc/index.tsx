import Link from 'next/link';
import style from '@/styles/general.module.css';
import SpcEx from '@/pages/exercises/em1/spcex';
import Helpful from '@/pages/components/helpful';

const Spc = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Special Techniques
            </h1>
            <SpcEx />
            <Helpful />
        </>
    );
}

export default Spc;