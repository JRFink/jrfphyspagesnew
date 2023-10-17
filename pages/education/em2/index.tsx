import Link from 'next/link';
import style from '@/styles/general.module.css';

const Em2 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electricity and Magnetism 2
            </h1>
<br />
             <div className={style.flexContainer} id="intro"> 
                 <Link href="/education/em2/vid" className={style.styleCourseNav}>Videos</Link> 
                 <Link href="/education/em2/quiz" className={style.styleCourseNav}>Quizzes</Link>  
                 <Link href="/education/em2/hw" className={style.styleCourseNav}>Homework</Link>   
                 <Link href="/education/em2/equat" className={style.styleCourseNav}>Equations</Link> 
                 <Link href="/education/em2/stuff" className={style.styleCourseNav}>Question database</Link> 
                 <Link href="/education/em2/prob" className={style.styleCourseNav}>Real world problems</Link> 
                 {/* <Link href="/education/em2/expver" className={style.styleCourseNav}>Experimental verification</Link>  */}
                 <Link href="/education/em2/syll" className={style.styleCourseNav}>Syllabus</Link> 
                 <Link href="/education/em2/exam" className={style.styleCourseNav}>Exam information</Link> 
             </div>              
             <br />
<p> 
  Here is a useful book for <Link href="https://www.amazon.com/gp/aw/d/0321856562/ref=dp_ob_neva_mobile">
Electricity and magnetism</Link>
</p>
<br />
            <Link href="/education/em2/edynam" className={style.generalLink}>Electrodynamics</Link><br></br>
            <br></br>
            <Link href="/education/em2/cons" className={style.generalLink}>Conservation Laws</Link><br></br>
            <br></br>
            <Link href="/education/em2/eb" className={style.generalLink}>Electromagnetic Waves</Link><br></br>
            <br></br>
            <Link href="/education/em2/v" className={style.generalLink}>Potentials and Fields</Link><br></br>
            <br></br>
            <Link href="/education/em2/rad" className={style.generalLink}>Radiation</Link><br></br>
            <br></br>
            <Link href="/education/em2/rel" className={style.generalLink}>Electrodynamics and Relativity</Link><br></br>
        </>
    );
}

export default Em2;