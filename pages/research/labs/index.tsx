import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Labs = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Labs
            </h1>
            <br />
            <p>
                <ul>
                    <li>
                         Oak Ridge National Lab 
                    </li>
                    <li>
                         SLAC
                    </li>
                    <li>
                         CERN
                    </li>
                    <li>
                       Lawrence Livermore 
                    </li>
                    <li>
                      Fermilab
                    </li>
                </ul>
            </p>
        </>
    );
}

export default Labs;
