import Link from 'next/link';
import style from '@/styles/general.module.css';
import HoEx from '@/pages/exercises/qm1/hoex';
import Helpful from '@/pages/components/helpful';

const Ho = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Harmonic Oscillator 
            </h1>
            <HoEx />
            <Helpful />
        </>
    );
}

export default Ho;