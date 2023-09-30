import Link from 'next/link';
import style from '@/styles/general.module.css';

const ApCmech = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}> 
           AP Physics C - mechanics 
        </h1> 
        <br />
<p> 
The class consists of seven units&#59; they are: 
</p>
            <br />   
               <p className={style.numberLink}>   
                   1  
               </p>   
               <Link href="/education/ap/apcmech/kin" className={style.generalLink}>Kinematics</Link><br></br>   
               <br></br>   
               <p className={style.numberLink}>  
               <br />    
                <p className={style.numberLink}>    
                    2   
                </p>    
                <Link href="/education/ap/apcmech/newt" className={style.generalLink}>Newton&#39;s laws of motion</Link><br></br>                  
                <br />    
                <p className={style.numberLink}>    
                    3  
                </p>    
                <Link href="/education/ap/apcmech/energ" className={style.generalLink}>Work, energy, &#39; power</Link><br></br>    
                <br />    
                <p className={style.numberLink}>   
                    4   
                </p>    
                <Link href="/education/ap/apcmech/sys" className={style.generalLink}>Systems of particles and linear momentum</Link><br></br>    
                <br />    
                <p className={style.numberLink}>   
                    5  
                </p>    
                <Link href="/education/ap/apcmech/rot" className={style.generalLink}>Rotation</Link><br></br>    
                <br />     
   <p className={style.numberLink}>   
                    6  
                </p>    
                <Link href="/education/ap/apcmech/osc" className={style.generalLink}>Oscillations</Link><br></br>    
                <br />      
   <p className={style.numberLink}>   
                    7   
                </p>    
                <Link href="/education/ap/apcmech/grav" className={style.generalLink}>Gravitation</Link><br></br>    
                <br /> 
         <p>  
            Find the curriculum  
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics"> here</a>. 
         </p>  
      </> 
 ); 
 }  
  
 export default ApCmech;
