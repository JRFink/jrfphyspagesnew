import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful';

const Ham = () => {
    return (
        <>
            <Link href="/education/qm2" className={style.backtoLink}>Quantum 2</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Hamiltonians of atoms and molecules
            </h1>
            <p>
                Here are some different hamiltonians for atoms and molecules: 
                <ul>
                    <li>Hydrogen</li>
                    <li>Helium</li>
                    <li>Lithium</li>
                    <li>Berylium</li>
                    <li>Water molecule</li>
                </ul>
            </p>
            <Helpful />
        </>
    );
}

export default Ham;