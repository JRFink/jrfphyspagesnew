import Link from 'next/link';
import style from '@/styles/general.module.css';
import TheatEx from '@/pages/exercises/gp1/theatex';
import Helpful from '@/pages/components/helpful';

const Theat = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Temperature and Heat
            </h1>

            <br></br>
            <br></br>
            <TheatEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Theat;