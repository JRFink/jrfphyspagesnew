import Link from 'next/link';
import style from '@/styles/general.module.css';
import { Modoverview1st } from '@/pages/components/modoverview';
import FlawEx from '@/pages/exercises/gp1/flawex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Flaw = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                First Law of Thermodynamics
            </h1>
            

            {/* thermodynamic systems 
            work done during volume changes 
            paths between thermodynamic states 
            internal energy and the first law of thermodynamics 
            kinds of thermodynamic processes 
            internal energy of an ideal gas 
            heat capacities of an ideal gas 
            adiabatic processes for an ideal gas  */}
            <Modoverview1st />
            <br></br>
            <br></br>
            <FlawEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <Helpful />
        </>
    );
}

export default Flaw;