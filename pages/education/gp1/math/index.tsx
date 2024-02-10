import Link from 'next/link';
import style from '@/styles/general.module.css';

const Math = () => { 
    return ( 
       <> 
         <br />
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <h1 className={style.centerText}>
             Math
         </h1>
          <p> 
              The math you will need to know for general physics 1.
          </p>
         <ul> 
           <li>Algebra</li>
               <ol> 
                  <li>Palaboras</li>
               </ol>
           <li>Geometry</li>          
           <li>Trigonometry</li>
         <ol>
                  <li>Double angle formulas</li>
  <li>Trig identities</li>
</ol>
<li>Vectors</li>
<ol>
    <li>Dot product</li>
    <li>Cross product</li>
</ol>
           <li>Calculus</li>
               <ol>
                 <li>Rates of change</li>
       <ul>
            <li>Examples of rates of change</li>
       <li>Mathematical rates of change</li>
       <li>Application to physical problems</li>
       </ul>
           <li>Derivatives</li>
              
           <li>Summations</li>
           <li>Integrals</li>
               </ol>
         </ul>
       </>
      );
}

export default Math;
