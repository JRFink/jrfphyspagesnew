import Link from 'next/link';
import style from '@/styles/general.module.css';
import GaussEx from '@/pages/exercises/gp2/gaussex';
import Helpful from '@/pages/components/helpful';

const Gauss = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Gauss&apos; Law 
            </h1>

                {/* charge and electric flux
                calculating e flux
                gauss law 
                applications 
                charges on conductors
   
            electric flux 
            gauss law 
            charged isolated conductor 
            applying gauss law, cylindrical symmetry 
            applying gauss law, planar symmetry 
            applying gauss law, spherical symmetry  */}
            <GaussEx />
            <Helpful />
        </>
    );
}

export default Gauss;