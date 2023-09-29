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
                <br />
                <li><Link href="https://fnal.gov">Fermilab</Link></li>
                <br />
                <li><Link href="https://www6.slac.stanford.edu/research/advanced-accelerators">SLAC</Link></li>
<br />
  <li>Neutrinos at <Link href="https://www.dunescience.org/">DUNE</Link></li> 
<br />
<li> Neutrinos at <Link href="https://t2k-experiment.org/">T2K</Link> in Japan</li>         
</ul>
            <br />
            
        </>
    );
}

export default Exp;