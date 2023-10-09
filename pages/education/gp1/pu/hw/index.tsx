import Link from 'next/link';
import style from '@/styles/general.module.css';

const PuHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br />
            <br />
            <h1 className={style.centerText}>
                Energy conservation hw
            </h1>
   <p>
<ul>
     <li>Potential energy</li>
     <li>Kinetic energy</li>
     <li>Work</li>
     <li>Conservative forces</li>
     <li>Non-conservative forces</li>
     <li>Energy diagrams</li>
</ul>
</p>
        </>
    );
}

export default PuHw;