import Link from 'next/link';
import WkeVid from '@/public/videos/gp1/wke';
import style from '@/styles/general.module.css';
import WkeEx from '@/pages/exercises/gp1/wkeex';
import Helpful from '@/pages/components/helpful';

const Wke = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Work and Kinetic Energy
            </h1>
            <br></br>
            <h2>
                1. Work
            </h2>
            <h2>
                2. Work and kinetic energy theorem
            </h2>
            <WkeVid />
            <h2>
                3. Work and energy with constant forces
            </h2>
            <h2>
                4. Work and energy with non-constant forces 
            </h2>
            <h3>
                4.1 Gravity does work
            </h3>
            <h3>
                4.2 Springs do work
            </h3>
            <h2>
                5. Power
            </h2>
            <br></br>
            <br></br>
            <WkeEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Wke;