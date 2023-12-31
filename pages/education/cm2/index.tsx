import Link from 'next/link';
import style from '@/styles/general.module.css';

const Cm2 = () => {
    return (
        <>
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Classical Mechanics 2
            </h1>
            <br />
            <div className={style.flexContainer}> 
                 <Link href="/education/cm2/vid" className={style.styleCourseNav}>Videos</Link>             
                  <Link href="/education/cm2/quiz" className={style.styleCourseNav}>Quizzes</Link>   
                  <Link href="/education/cm2/hw" className={style.styleCourseNav}>Homework</Link>    
                  <Link href="/education/cm2/equat" className={style.styleCourseNav}>Equations</Link>  
               <Link href="/education/cm2/tbook" className={style.styleCourseNav}>Textbooks</Link>
                  <Link href="/education/cm2/stuff" className={style.styleCourseNav}>Question database</Link>  
                  <Link href="/education/cm2/prob" className={style.styleCourseNav}>Real world problems</Link>  
                 {/* <Link href="/education/cm2/expver" className={style.styleCourseNav}>Experimental verification</Link>  */}
                  <Link href="/education/cm2/syll" className={style.styleCourseNav}>Syllabus</Link>  
                  <Link href="/education/cm2/exam" className={style.styleCourseNav}>Exam information</Link>  
             </div> 
             <br />           
            <Link href="/education/cm2/cvar" className={style.generalLink}>Math background</Link><br></br>
            <br></br>
            <Link href="/education/cm2/leq" className={style.generalLink}>Lagrange&apos;s Equations</Link><br></br>
            <br></br>
            <Link href="/education/cm2/fnet" className={style.generalLink}>Central Force Problem</Link><br></br>
            <br></br>
            <Link href="/education/cm2/rbod" className={style.generalLink}>Rigid Body Motion</Link><br></br>
            <br></br>
            <Link href="/education/cm2/ham" className={style.generalLink}>Hamiltonian Mechanics</Link><br></br>
            <br></br>
            <Link href="/education/cm2/pert" className={style.generalLink}>Perturbation Theory</Link><br></br>
        </>
    );
}

export default Cm2;