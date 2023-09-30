import Link from 'next/link';
import style from '@/styles/general.module.css';

const ApCelec = () => {  
   return (  
      <>  
        <br />
        <Link href="/education/ap" className={style.backtoLink}>AP classes</Link>
        <h1 className={style.centerText}> 
           AP Physics C - e and m  
        </h1> 
        <br />
            <p>
                The current structure of the class consists of five units&#59; they are: 
            </p> 
               <p className={style.numberLink}>    
                    1   
                </p>    
                <Link href="/education/ap/apcelec/stat" className={style.generalLink}>Electrostatics</Link><br></br>    
                <br />     
                 <p className={style.numberLink}>     
                     2    
                 </p>     
                 <Link href="/education/ap/apcelec/cond" className={style.generalLink}>Conductors, capacitors, &#38; dielectrics</Link><br></br>                   
                 <br />     
                 <p className={style.numberLink}>     
                     3   
                 </p>     
                 <Link href="/education/ap/apcelec/circ" className={style.generalLink}>Electric circuits</Link><br></br>     
                 <br />     
                 <p className={style.numberLink}>    
                     4    
                 </p>     
                 <Link href="/education/ap/apcelec/mag" className={style.generalLink}>Magnetic fields</Link><br></br>     
                 <br />     
                 <p className={style.numberLink}>    
                     5   
                 </p>     
                 <Link href="/education/ap/apcelec/emag" className={style.generalLink}>Electromagnetism</Link><br></br>          
                 <br />
                    <p>  
                        Find the curriculum  
                        <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism"> here</a>. 
                    </p>  
      </> 
    ); 
}  
  
 export default ApCelec;
