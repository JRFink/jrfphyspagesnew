import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
 const Stuff = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link> 
             <br /> 
             <h1 className={style.centerText}> 
                 Question database
             </h1> 
                <p>
                    Hello, and welcome to the question database. 
                    This is your one-stop-shop for all your quantum 1 questions. 
                    Eventually we will have hundreds of quantum questions for you to do.
                </p>
                <Link href="/education/qm1/qdatabase/griffiths" className={style.generalLink}><em>Introduction to Quantum Mechanics</em> Griffiths <em>3rd ed.</em> &#169;</Link>
            <br />
         </> 
     ); 
 } 
  
 export default Stuff;
