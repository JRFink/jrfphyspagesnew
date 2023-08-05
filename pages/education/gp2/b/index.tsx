import Link from 'next/link';
import style from '@/styles/general.module.css';
import BEx from '@/pages/exercises/gp2/bex';
import Helpful from '@/pages/components/helpful';

const B = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Magnetic Field and Force
            </h1>
            {/* Magnetism 
            magnetic field 
            magnetic field lines and magnetic flux 
            motion of charged particles 
            applications of motion of charged particles 
            magnetic force on a current-carrying conductor 
            force and torque on a current loop 
            the direct-current motor 
            hall effect

            magnetic fields and the definition of b 
            crossed fields: discovery of the electron 
            crossed fields: the hall effect 
            a circulating charged particle 
            cyclotrons and synchrotons 
            magnetic force on a current carrying wire 
            torque on a current loop 
            the magnetic dipole moment 

            -- then magn fields due to currents 
            magnetic field due to a current 
            force between two parallel currents 
            ampere's law 
            solenoids and toroids 
            a current carrying coil as a magnetic dipole  */}
            <BEx />
            <Helpful />
        </>
    );
}

export default B;