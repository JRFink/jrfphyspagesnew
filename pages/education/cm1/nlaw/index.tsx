import Link from 'next/link';
import style from '@/styles/general.module.css';
import NlawEx from '@/pages/exercises/cm1/nlawex';
import Helpful from '@/pages/components/helpful';

const Nlaw = () => {
    return (
        <>
            <Link href="/education/cm1" className={style.backtoLink}>Class Mech 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Coordinates, frames, and Newton&apos;s Laws 
            </h1>
            <h2>
                1. Frames
            </h2>
            <h3>
                1.1 Inertial
            </h3>
            <h3>
                1.2 Non&#8208;inertial
            </h3>
            <h2>
                2. Coordinates
            </h2>
            <h3>
                2.1 Cartesian
            </h3>
            <h3>
                2.2 Polar 
            </h3>
            <h3>
                2.3 Spherical 
            </h3>
            <h3>
                2.4 Cylindrical 
            </h3>
            <h2>
                3. Combinations of frames and coordinates
            </h2>
            <h2>
                4. Newton&apos;s law 
            </h2>
            <h3>
                4.1 In inertial frames 
            </h3>
            <h3>
                4.2 In non-inertial frames 
            </h3>
            <NlawEx />
            <Helpful />
        </>
    );
}

export default Nlaw;