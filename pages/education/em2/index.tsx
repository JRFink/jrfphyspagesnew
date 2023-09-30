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