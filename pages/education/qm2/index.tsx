import Link from 'next/link';
import style from '@/styles/general.module.css';


const Qm2 = () => {
    return (
        <>
            <br />
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Quantum Mechanics 2
            </h1>
            <br></br>
            <div className={style.flexContainer} id="intro">
                <Link href="/education/qm2/vid" className={style.styleCourseNav}>Videos</Link>
                <Link href="/education/qm2/quiz" className={style.styleCourseNav}>Quizzes</Link> 
                <Link href="/education/qm2/hw" className={style.styleCourseNav}>Homework</Link>  
                <Link href="/education/qm2/equat" className={style.styleCourseNav}>Equations</Link>
               <Link href="/education/qm2/tbook" className={style.styleCourseNav}>Textbooks</Link>
                <Link href="/education/qm2/stuff" className={style.styleCourseNav}>Question database</Link>
                <Link href="/education/qm2/prob" className={style.styleCourseNav}>Real world problems</Link>
                {/* <Link href="/education/qm2/expver" className={style.styleCourseNav}>Experimental verification</Link> */}
                <Link href="/education/qm2/syll" className={style.styleCourseNav}>Syllabus</Link>
                <Link href="/education/qm2/exam" className={style.styleCourseNav}>Exam information</Link>
            </div>
             <br></br>
            <br></br>
            <Link href="/education/qm2/q3d" className={style.generalLink}>Quantum in 3 Dimensions</Link><br></br>
            <br></br>
            <Link href="/education/qm2/h" className={style.generalLink}>Hydrogen Atom</Link><br></br>
            <br></br>
            <Link href="/education/qm2/pt" className={style.generalLink}>Perturbation Theory</Link><br></br>
            <br></br>
            <Link href="/education/qm2/ph" className={style.generalLink}>Perturbation of Hydrogen</Link><br></br>
            <br></br>
            <Link href="/education/qm2/tdp" className={style.generalLink}>Time Dependent Perturbation Theory</Link><br></br>
            <br></br>
            <Link href="/education/qm2/wkb" className={style.generalLink}>WKB Approximation</Link><br></br>
            <br></br>
            <Link href="/education/qm2/sc" className={style.generalLink}>Scattering</Link><br></br>
            <br></br>
            <Link href="/education/qm2/ma" className={style.generalLink}>Modern Applications</Link><br></br>
        </>
    );
}

export default Qm2;
