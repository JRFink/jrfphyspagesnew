import Link from 'next/link';
import PmvVid from '@/public/videos/gp1/pmv';
import style from '@/styles/general.module.css';
import PmvEx from '@/pages/exercises/gp1/pmvex';
import Helpful from '@/pages/components/helpful';

const Pmv = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Momentum, Impulse, & Collisions
            </h1>
            <br></br>
            <h2>
                1. Center of mass
            </h2>
            <h2>
                2. Momentum
            </h2>
            <h3>
                2.1 Mechanical momentum
            </h3>
            <h3>
                2.2 Momentum in 1, 2, and 3 dimensions
            </h3>
            <h2>
                3. Impulse
            </h2>
            <h2>
                4. Collisions
            </h2>
            <h3>
                4.1 Elastic collisions
            </h3>
            <h3>
                4.2 Inelastic collisions
            </h3>
            <h2>
                5. Systems with varying mass
            </h2>
            <br></br>
            <PmvVid />
            <br></br>
            <br></br>
            <PmvEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Pmv;