import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Tbook = () => {
    return (
        <>
            <br />
            <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Books for quantum computing
            </h1>
            <br />
            <p>
                Some of the best books for quantum info and computing&#58;
<ul>
     <li><em>Quantum Computation and Quantum Information</em> by <em>Nielsen and Chuang</em> Cambridge 2011 &#169;
     </li>
</ul>
            </p>

        </>
    );
}

export default Tbook;
