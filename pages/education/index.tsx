import Link from 'next/link';
import style from '@/styles/general.module.css';

const Education = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Education
            </h1>
            <br></br>
            <br></br>
            <div className={style.flexContainer}>
                
                <Link href="/education/classes" className={style.generalLink}>Classes</Link>
                <br />
                <Link href="/education/topics" className={style.generalLink}>Topics</Link>
                <br />           
                <Link href="/education/hop1" className={style.generalLink}>History of Physics 1</Link><br></br>
                <Link href="/education/hop2" className={style.generalLink}>History of Physics 2</Link><br></br>
                <Link href="/education/gp1" className={style.generalLink}>General Physics 1</Link><br></br>
                <Link href="/education/gp2" className={style.generalLink}>General Physics 2</Link><br></br>
                <Link href="/education/imp" className={style.generalLink}>Intro to Modern Physics</Link><br></br>
                <Link href="/education/cm1" className={style.generalLink}>Classical Mechanics 1</Link><br></br>
                <Link href="/education/cm2" className={style.generalLink}>Classical Mechanics 2</Link><br></br>
                <Link href="/education/em1" className={style.generalLink}>Electricity & Magnetism 1</Link><br></br>
                <Link href="/education/em2" className={style.generalLink}>Electricity & Magnetism 2</Link><br></br>
                <Link href="/education/therm" className={style.generalLink}>Thermodynamics</Link><br></br>
                <Link href="/education/qm1" className={style.generalLink}>Quantum Mechanics 1</Link><br></br>
                <Link href="/education/qm2" className={style.generalLink}>Quantum Mechanics 2</Link><br></br>
            </div>

            <h2 className={style.edHeaderSpace}>
                See what students are saying
            </h2>
            <h3 className={style.edHeaderSpace}>
                Reviews
            </h3>
            <br></br>
        </>
    );
}

export default Education;