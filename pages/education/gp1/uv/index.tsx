import Link from 'next/link';
import UnitsVid from '@/public/videos/gp1/units';
import style from '@/styles/general.module.css';
import UvEx from '@/pages/exercises/gp1/uvex';
import Helpful from '@/pages/components/helpful';

const Uvec = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Units, Coordinates, Vectors
            </h1>
            <br></br>
            <p>
                Physics describes the world in <em>units</em>. 
                A unit is a <em>standard</em> to which we compare everything else. 
                What does 3 meters mean? <br></br> <br></br>
                Meters is the unit, of length, 
                so 3 meters means three of whatever the standard for &apos;1 meter&apos; is.  
            </p>
            <br></br>
            <UnitsVid />
            <br></br>
            <br></br>
            <UvEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Uvec;