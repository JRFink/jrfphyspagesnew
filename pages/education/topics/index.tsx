import Link from 'next/link';
import style from '@/styles/general.module.css';
const Topics = () => { 
    return ( 
       <>
           <h1 className={style.centerText}>
             Topics
           </h1>
<Link href="/education/hop1" className={style.generalLink}>History of Physics 1</Link><br></br>
                <Link href="/education/hop2" className={style.generalLink}>History of Physics 2</Link><br></br>
<Link href="/education/gp2" className={style.generalLink}>General Physics 2</Link><br></br>
                <Link href="/education/imp" className={style.generalLink}>Intro to Modern Physics</Link><br></br>
                <Link href="/education/cm1" className={style.generalLink}>Classical Mechanics 1</Link><br></br>
                <Link href="/education/cm2" className={style.generalLink}>Classical Mechanics 2</Link><br></br>
                <Link href="/education/em1" className={style.generalLink}>Electricity & Magnetism 1</Link><br></br>
                <Link href="/education/em2" className={style.generalLink}>Electricity & Magnetism 2</Link><br></br>
                <Link href="/education/therm" className={style.generalLink}>Thermodynamics</Link><br></br>
                <Link href="/education/qm1" className={style.generalLink}>Quantum Mechanics 1</Link><br></br>
                <Link href="/education/qm2" className={style.generalLink}>Quantum Mechanics 2</Link><br></br> 
       </>
    );
}
