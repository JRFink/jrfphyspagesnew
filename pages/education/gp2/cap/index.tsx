import Link from 'next/link';
import style from '@/styles/general.module.css';
import CapEx from '@/pages/exercises/gp2/capex';
import Helpful from '@/pages/components/helpful';

const Cap = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electrostatic Energy and Capacitors
            </h1>
            {/* capacitors and capacitance
            capacitors in series and Parallel
            energy storage in capacitors and electric field energy 
            dielectrics
            molecular model of induced charge 
            gauss law in dielectrics 

            capacitance 
            calcuating the capacitance 
            capacitors in parallel and in series 
            energy stored in an electric field 
            capacitor with a dielectric 
            dielectric and gauss law  */}
            <CapEx />
            <Helpful />
        </>
    );
}

export default Cap;