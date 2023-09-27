import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/particle" className={style.backtoLink}>Particle phys</Link>
            <h1 className={style.centerText}>
                Particle theory
            </h1>
            <p>
                Below you will find some theories for particle physics. 
            </p>
            
            
        </>
    );
}

export default Theor;