import Link from 'next/link';
import style from '@/styles/general.module.css';
import LearnGoal from '@/pages/components/learngoal';
import ElecEx from '@/pages/exercises/em1/elecex';
import Helpful from '@/pages/components/helpful';

const Elecstatics = () => {
    return (
        <>
            <Link href="/education/em1" className={style.backtoLink}>E and M 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electrostatics
            </h1>
           {/* <ModoverviewElec /> */ }
             <br />  
             <LearnGoal /> 
             <h2>  
             Introduction  
             </h2> 
     
           
             <br /> 
             <br /> 
             <h2 className={style.h2SectionColor}>  
                     Domain of electrostatics   
             </h2> 
             <p>  
             The domain of electrostatics is...  
             </p> 
             <br />  
             <br /> 
                 <h2 className={style.h2SectionColor} id="desc"> 
                     1. Describing electrostatics 
                 </h2> 
                  <br /> 
                 <h3 className={style.h3num}> 
                     1.1  
                 </h3> 
                 <h3 className={style.h3text}> 
                     Point charge electrostatics 
                 </h3> 
                 <div className={style.equationBox}>
                    <div className={style.equation}><b>E</b> = q / 4 &#960; &#949;<span><sub>0</sub></span> 
                        r <span><sup>2</sup></span> &nbsp; <b>&#120111;</b> </div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
                </div>
                <br />
                <br />
                 <div className={style.equationBox}>
                    <div className={style.equation}><b>E</b> &nbsp; = - <b>&#8711;</b> &nbsp;  V </div>
                    <div className={style.equationNumber}>&#40;2&#41;</div>
                 </div>
                 <br /> 
                 <h3 className={style.h3num}> 
                     1.2 
                 </h3>
                <h3 className={style.h3text}> 
                     Line charge electrostatics 
                 </h3> 
                 <br />
                 <h3 className={style.h3num}> 
                     1.3 
                 </h3>
                <h3 className={style.h3text}> 
                     Sheet charge electrostatics 
                 </h3> 
                 <br />
                 <h3 className={style.h3num}> 
                     1.4 
                 </h3>
                <h3 className={style.h3text}> 
                     Volume charge electrostatics 
                 </h3> 
                 <br />
<p> 
    The voltage is given by 
</p>
<div className={style.equationBox}>
                    <div className={style.equation}> &#916; V = -  &#8747; E · dl  </div>
                    <div className={style.equationNumber}>&#40;3&#41;</div>
</div> 
<br />
            <ElecEx />
            <Helpful />
        </>
    );
}

export default Elecstatics;