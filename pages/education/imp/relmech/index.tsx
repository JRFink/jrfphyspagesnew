import Link from 'next/link';
import style from '@/styles/general.module.css';
import RelmechEx from '@/pages/exercises/imp/relmechex';
import Helpful from '@/pages/components/helpful';

const Relmech = () => {
    return (
        <>
            <Link href="/education/imp" className={style.backtoLink}>Intro to modern</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Relativistic Mechanics
            </h1>
            <RelmechEx />
            <Helpful />
        </>
    );
}

export default Relmech;