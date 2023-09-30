import Link from 'next/link';
import style from '@/styles/general.module.css';

const Ap1alg = () => { 
    return ( 
       <> 
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP</Link>
        <h1 className={style.centerText}>
            AP Physics 1 - algebra 
        </h1>
        <br />
        <p> 
             The current structure of the class consists of seven units&#59; they are:
</p>

            <br /> 
             <p className={style.numberLink}> 
                 1
             </p> 
             <Link href="/education/ap/apalg1/kin" className={style.generalLink}>Kinematics</Link><br></br> 
             <br></br> 
             <p className={style.numberLink}>
             <br />  
              <p className={style.numberLink}>  
                  2 
              </p>  
              <Link href="/education/ap/ap1alg/dyn" className={style.generalLink}>Dynamics</Link><br></br>                
              <br />  
              <p className={style.numberLink}>  
                  3
              </p>  
              <Link href="/education/ap/ap1alg/circ" className={style.generalLink}>Circular motion &#38; gravitation</Link><br></br>  
              <br />  
              <p className={style.numberLink}> 
                  4 
              </p>  
              <Link href="/education/ap/ap1alg/energ" className={style.generalLink}>Energy</Link><br></br>  
              <br />  
              <p className={style.numberLink}> 
                  5
              </p>  
              <Link href="/education/ap/ap1alg/energ" className={style.generalLink}>Momentum</Link><br></br>  
              <br />   
 <p className={style.numberLink}> 
                  6
              </p>  
              <Link href="/education/ap/ap1alg/harm" className={style.generalLink}>Sime harmonic motion</Link><br></br>  
              <br />  

 <p className={style.numberLink}> 
                  7 
              </p>  
              <Link href="/education/ap/ap1alg/torq" className={style.generalLink}>Torque and rotational motion</Link><br></br>  
              <br />  
        <p> 
            Find the curriculum 
            <a href="https://apstudents.collegeboard.org/courses/ap-physics-1-algebra-based"> here</a>.
        </p> 
       </>
  );
  } 
  
  export default Ap1alg;