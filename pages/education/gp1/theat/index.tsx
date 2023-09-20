import Link from 'next/link';
import style from '@/styles/general.module.css';
import { ModoverviewTheat } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import Summary from '@/pages/components/summary';
import TheatEx from '@/pages/exercises/gp1/theatex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';

const Theat = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Temperature and Heat
            </h1>
            <br></br>
            <ModoverviewTheat />
<br /> 
<LearnGoal />
<h2> 
Introduction
</h2>
<p> 
Proceeding from waves to heat and temperature, we move into the realm of thermodynamics. Thermodynamics studies the energy, heat, temperature, pressure, volume, density, and arrangement of objects. 
</p> 
<p> 
      It is slightly different from the previous sections in the sense that it is not so much concerned with finding the positions amd velocities of objects as it is concerned with finding the states of objects, and how those states evolve over time. 
</p> 
<p> 
        As a simple example, we could consider a block of ice sliding on a frictionless surface. The previous sections taught us how to find the position amd velocity of the block at any given time; thermo teaches us how the ice melts, how long it takes; how cold or &#39;hot&#39; it is; its density, etc. 
</p>
<br />
<br />
<h2 className={style.h2SectionColor}> 
         Domain of temperature and heat
</h2>
<p> 
 The domain of temperature and heat is... 
 </p>
<br /> 
<br />
            <h2 className={style.h2SectionColor} id="temp">
                1. Temperature 
            </h2>
                <p>
                    Temperature...
                </p>
                <h3 className={style.h3num}>
                    1.1 
                </h3>
                <h3 className={style.h3text}>
                    Thermometers
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.1.1 Scales
                    </h4>
                <h3 className={style.h3num}>
                    1.2
                </h3>
                <h3 className={style.h3text}>
                    &#40;Advanced thermo&#41;&#42;
                </h3>
                    <h4>
                        &nbsp; &nbsp; 1.2.1 Advanced...
                    </h4>
            <h2 className={style.h2SectionColor} id="zero">
                2. Zeroth and first law of thermo
            </h2>
                <p>
                    First two laws...
                </p>
                <h3 className={style.h3num}>
                    2.1 
                </h3>
                <h3 className={style.h3text}>
                    Zeroth
                </h3>
                    <h4>
                        &nbsp; &nbsp; 2.1.1 Zeroth...
                    </h4>
                <h3 className={style.h3num}>
                    2.2 
                </h3>
                <h3 className={style.h3text}>
                    First
                </h3>
                    <h4>
                        &nbsp; &nbsp; 2.2.1 First law...
                    </h4>
            <h2 className={style.h2SectionColor} id="therm">
                3. Thermal expansion
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="heat">
                4. Heat transfer
            </h2>
<Summary /> 
<br />
            <br></br>
            <br></br>
            <TheatEx />
            <br></br>
            <br></br>
            <OnedmQz />
            <br />
            <br /> 
            <Link href="/education/gp1/kin" className={style.backtoLink}>Gases &#10140;</Link>  
             <br />  
             <br />
            <Helpful />
        </>
    );
}

export default Theat;