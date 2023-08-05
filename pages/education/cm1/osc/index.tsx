import Link from 'next/link';
import style from '@/styles/general.module.css';
import OscEx from '@/pages/exercises/cm1/oscex';
import Helpful from '@/pages/components/helpful';

const Osc = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Oscillations
            </h1>
            {/* hookes law 
            shm 
            two dimensional oscillators 
            damped oscillations 
            drive damped oscillations 
            resonance 
            fourier series 
            fourier series solution for the driven oscillator 
            the rms displacement, parsevals theorem */}
            <OscEx />
            <Helpful />
        </>
    );
}

export default Osc;