import Link from 'next/link';
import style from '@/styles/general.module.css';
{ /* import AlbFlag from '@/public/images/flags/albania'; */ }
import ScEx from '@/pages/exercises/qm2/scex';
import Helpful from '@/pages/components/helpful';

const Sc = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Scattering
            </h1>
            <AlbFlag />
            <ScEx />
            <Helpful />
        </>
    );
}

export default Sc;
