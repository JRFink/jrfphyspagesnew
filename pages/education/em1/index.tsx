import Link from 'next/link';
import style from '@/styles/general.module.css';

const Em1 = () => {
    return (
        <>
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Electricity and Magnetism 1
            </h1>
            <br />
            <div className={style.flexContainer} id="intro">
                <Link href="/education/em1/vid" className={style.styleCourseNav}>Videos</Link>
                <Link href="" className={style.styleCourseNav}>Course notes...</Link>
                <Link href="" className={style.styleCourseNav}>Quizzes...</Link>  
                <Link href="/education/em1/equat" className={style.styleCourseNav}>Equation page</Link>
            </div>
            <br />
            <Link href="/education/em1/math" className={style.generalLink}>Math background</Link><br></br>
            <br></br>
            <Link href="/education/em1/elec" className={style.generalLink}>Electrostatics</Link><br></br>
            <br></br>
            <Link href="/education/em1/spc" className={style.generalLink}>Special Techniques</Link><br></br>
            <br></br>
            <Link href="/education/em1/fields" className={style.generalLink}>Electric Fields in Matter</Link><br></br>
            <br></br>
            <Link href="/education/em1/bstat" className={style.generalLink}>Magnetostatics</Link><br></br>
            <br></br>
            <Link href="/education/em1/bmat" className={style.generalLink}>Magnetic Fields in Matter</Link><br></br>
        </>
    );
}

export default Em1;