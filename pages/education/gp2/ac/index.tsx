import Link from 'next/link';
import style from '@/styles/general.module.css';
import AcEx from '@/pages/exercises/gp2/acex';
import Helpful from '@/pages/components/helpful';

const Ac = () => {
    return (
        <>
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                AC Circuits
            </h1>
            {/* phasors and alternating currents 
            resistance and reactance 
            lrc series circuit 
            power in alternating-c circuits 
            resonance in ac circuits

            lc oscillations 
            damped oscillations in an rlc circuit 
            forced oscillations of three simple circuits 
            series rlc circuit 
            power in alternating current circuits 
            transformers  */}


            <AcEx />
            <Helpful />
        </>
    );
}

export default Ac;