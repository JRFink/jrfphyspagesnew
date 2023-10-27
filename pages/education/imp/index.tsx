import Link from 'next/link';
import style from '@/styles/general.module.css';

const Imp = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Intro to Modern Physics
            </h1>
            <br></br>
            <div className={style.flexContainer} id="intro">
                <Link href="/education/imp/vid" className={style.styleCourseNav}>Videos</Link>
                <Link href="/education/imp/quiz" className={style.styleCourseNav}>Quizzes</Link> 
                <Link href="/education/imp/hw" className={style.styleCourseNav}>Homework</Link>  
                <Link href="/education/imp/equat" className={style.styleCourseNav}>Equations</Link>
                <Link href="/education/imp/tbook" className={style.styleCourseNav}>Textbooks</Link>
               <Link href="/education/imp/stuff" className={style.styleCourseNav}>Question database</Link>
                <Link href="/education/imp/prob" className={style.styleCourseNav}>Real world problems</Link>
                <Link href="/education/imp/syll" className={style.styleCourseNav}>Syllabus</Link>
                <Link href="/education/imp/exam" className={style.styleCourseNav}>Exam information</Link>
            </div>
            <br></br>
            <Link href="/education/imp/rel" className={style.generalLink}>Space, time, and relativity</Link><br></br>
            <br></br>
            <Link href="/education/imp/relmech" className={style.generalLink}>Relativistic mechanics</Link><br></br>
            <br></br>
            <Link href="/education/imp/quant" className={style.generalLink}>Intro to quantum mechanics</Link><br></br>
            <br></br>
            <Link href="/education/imp/his" className={style.generalLink}>Historical survey</Link><br></br>
            <br></br>
            <Link href="/education/imp/schrod" className={style.generalLink}>Schrodinger equation</Link><br></br>
            <br></br>
            <Link href="/education/imp/hyd" className={style.generalLink}>Hydrogen</Link><br></br>
            <br></br>
            <Link href="/education/imp/multnuc" className={style.generalLink}>Multi nucleon and electron atoms</Link><br></br>
            <br></br>
            <Link href="/education/imp/mod" className={style.generalLink}>Modern applications</Link><br></br>
        </>
    );
}

export default Imp;