import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                AMO experiment
            </h1>
            <br />
            <p>
                Below you will find some experiments in AMO physics. 
            </p>
            <ul> 
                 <li><Link href="https://jila.colorado.edu/cornell-group/research/edm-molecular-ions">shape of the electron</Link> - boulder - cornell </li>
            </ul>          
        </>
    );
}

export default Exp;