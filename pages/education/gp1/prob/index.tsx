import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
import Helpful from '@/pages/components/helpful/$gp1$prob';
  
 const Prob = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                Real world problems
             </h1> 
             <br />
             <p>
                These are some real world problems that you will be able to solve after going through these sections. 
             </p>
             <br />
             <br />
             <h2 className={style.h2SectionColor}>
                <Link href="/education/gp1/1dm" className={style.noUnder}>Motion in 1 dimension</Link> 
             </h2>
             <br />
             <br />
             <p>
                After going through this section, you should be able to 
                <ul>
                    <li>Solve for the position of an airplane as a function of time along the x axis</li>
                </ul>
            </p>
            <br />
            <Helpful />
         </> 
     ); 
 } 
  
 export default Prob;