import Link from 'next/link';
import style from '@/styles/general.module.css';
import BoxEx from '@/pages/exercises/qm1/boxex';
import Helpful from '@/pages/components/helpful';

const Box = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Particle in a box
            </h1>
            <BoxEx />
            <Helpful />
        </>
    );
}

export default Box;