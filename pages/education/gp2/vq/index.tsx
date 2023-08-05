import Link from 'next/link';
import style from '@/styles/general.module.css';
import VqEx from '@/pages/exercises/gp2/vqex';
import Helpful from '@/pages/components/helpful';

const Vq = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electric Potential 
            </h1>
        
                {/* e potential energy
                e potential 
                calculating electric potential 
                equipotential surfaces 
                potential gradient  
      
            electric potential 
            equipotential surfaces and the electric field 
            potential due to a charged particle 
            potential due to an electric dipole 
            potential due to a continuous charge distribution 
            calculating the field from the potential 
            electric potential energy of a system of charged particles 
            potential of a charged isolated conductor  */}
            <VqEx />
            <Helpful />
        </>
    );
}

export default Vq;