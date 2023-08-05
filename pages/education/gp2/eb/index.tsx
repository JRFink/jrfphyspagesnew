import Link from 'next/link';
import style from '@/styles/general.module.css';
import EbEx from '@/pages/exercises/gp2/ebex';
import Helpful from '@/pages/components/helpful';

const Eb = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electromagnetic Waves 
            </h1>
            {/* maxwells equations and em waves 
            plane em waves and the speed of light 
            sinusoidal em waves 
            energy and momentum in em waves 
            standing em waves 

            em waves 
            energy transport and the poynting vector 
            radiation pressure 
            polarization 
            reflection and refraction 
            total internal reflection 
            polarization by reflection  */}
            <EbEx />
            <Helpful />
        </>
    );
}

export default Eb;