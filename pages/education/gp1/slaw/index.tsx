import Link from 'next/link';
import style from '@/styles/general.module.css';
import { Modoverview2nd } from '@/pages/components/modoverview';
import Summary from '@/pages/components/summary';
import SlawEx from '@/pages/exercises/gp1/slawex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Slaw = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Second law of Thermodynamics
            </h1>
            <Modoverview2nd /> 
            <br></br>
<h2> 
Introduction
</h2> 
<p> 
        Moving from the first law we proceed to the second. Its infamous. 
</p> 
<p> 
        The second law is about the arrangements of a system. We use it to understand how systems evolve over time, such as how a clean room becomes dirty. 
</p> 
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
<Summary /> 
<br />  
            <br></br>
            <br></br>
            <SlawEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2 &#10140;</Link>  
             <br />  
             <br />            <Helpful />
        </>
    );
}

export default Slaw;