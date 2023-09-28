import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Exp = () => {
    return (
        <>
            <br />
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Particle experiment
            </h1>
            <p>
                Below you will find some experiments in particle physics. 
            </p>
            <ul>
                <li><Link href="https://home.cern">CERN</Link></li>
                <li><Link href="https://fnal.gov">Fermilab</Link></li>
                <li><Link href="https://www6.slac.stanford.edu/research/advanced-accelerators">SLAC</Link></li>
            </ul>
            <br />
            
        </>
    );
}

export default Exp;