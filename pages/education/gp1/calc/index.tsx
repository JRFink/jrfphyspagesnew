import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful';

const Calc = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Big calc review
            </h1>
            <br></br>
            <h2>
                1. Rate of Change
            </h2>
            <h2>
                2. Example with 1 dimensional motion
            </h2>
            <br></br>
            <Helpful />
        </>
    );
}

export default Calc;