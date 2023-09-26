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
                    <div className={style.equation}>E = - &#8711; V </div>
                    <div className={style.equationNumber}>&#40;1&#41;</div>
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
            <ElecEx />
            <Helpful />
        </>
    );
}

export default Elecstatics;