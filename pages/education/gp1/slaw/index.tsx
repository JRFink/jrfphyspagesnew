import Link from 'next/link';
import style from '@/styles/general.module.css';
import SlawEx from '@/pages/exercises/gp1/slawex';
import Helpful from '@/pages/components/helpful';

const Slaw = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Second law of Thermodynamics
            </h1>
            <h2 className={style.h2SectionColor} id="ent"> 
                Entropy 
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="eng"> 
                Engines 
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="ref"> 
                Refrigerators 
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="stat"> 
                Statistics 
            </h2>  
            <br></br>
            <br></br>
            <SlawEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default Slaw;