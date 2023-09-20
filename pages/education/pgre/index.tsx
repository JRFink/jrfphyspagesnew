import Link from 'next/link';
import style from '@/styles/general.module.css'; 
  
 const Pgre = () => {  
   return (  
      <>  
         <h1 className={style.centerText}> 
              Physics GRE &#174; prep 
         </h1> 
 <p> 
      This page will help you prepare for the <Link href="/pdf/fact-sheet-physics.pdf">physics gre</Link>. 
 </p> 
      <p>    
      The test covers the following topics... 
<ul>
  <li>Classical mechanics</li>
  <li>Electromagnetism</li>
  <li>Optics and wave</li>
  <li>Thermodynamics and stat mech</li>
  <li>Quantum mechanics</li>
  <li>Atomic phys</li>
  <li>Special relativity</li>
  <li>Laboratory methods</li>
  <li>Special topics</li>
</ul> 
        
      </p> 
      </> 
   );   
 } 
  
 export default Pgre; 
