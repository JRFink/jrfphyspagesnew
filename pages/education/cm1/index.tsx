import Link from 'next/link';
import style from '@/styles/general.module.css';


const Cm1 = () => {
    return (
        <>
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Classical Mechanics 1
            </h1>
            <br />
            <div className={style.flexContainer}>
                <Link href="/education/cm1/vid" className={style.styleCourseNav}>Videos</Link>            
                 <Link href="/education/cm1/quiz" className={style.styleCourseNav}>Quizzes</Link>  
                 <Link href="/education/cm1/hw" className={style.styleCourseNav}>Homework</Link>   
                 <Link href="/education/cm1/equat" className={style.styleCourseNav}>Equations</Link> 
                 <Link href="/education/cm1/stuff" className={style.styleCourseNav}>Question database</Link> 
                 <Link href="/education/cm1/prob" className={style.styleCourseNav}>Real world problems</Link> 
                <Link href="/education/cm1/expver" className={style.styleCourseNav}>Experimental verification</Link>
                 <Link href="/education/cm1/syll" className={style.styleCourseNav}>Syllabus</Link> 
                 <Link href="/education/cm1/exam" className={style.styleCourseNav}>Exam information</Link> 
            </div>
            <br />
            <p> 
                A nice textbook for classical mechanics is <Link href="https://www.amazon.com/Classical-Mechanics-John-R-Taylor/dp/189138922X">Classical Mechanics</Link> by John Taylor
            </p>
            <br />
                <Link href="/education/cm1/over" className={style.generalLink}>Overview of classical mechanics</Link><br></br>
                <br></br>
                <Link href="/education/cm1/nlaw" className={style.generalLink}>Newton&apos;s Laws</Link><br></br>
                <br></br>
                <Link href="/education/cm1/proj" className={style.generalLink}>Projectiles</Link><br></br>
                <br></br>
                <Link href="/education/cm1/angmom" className={style.generalLink}>Momentum and Angular Momentum</Link><br></br>
                <br></br>
                <Link href="/education/cm1/energ" className={style.generalLink}>Energy</Link><br></br>
                <br></br>
                <Link href="/education/cm1/osc" className={style.generalLink}>Oscillations</Link><br></br>
        </>
    );
}

export default Cm1;