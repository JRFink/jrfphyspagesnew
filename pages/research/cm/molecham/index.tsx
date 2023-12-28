import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const MolecHam = () => {
    return (
        <>
            <br />
            <Link href="/research/cm" className={style.backtoLink}>Condensed Matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Molecular Hamiltonians
            </h1>
            <br />
           
        </>
    );
}

export default MolecHam;