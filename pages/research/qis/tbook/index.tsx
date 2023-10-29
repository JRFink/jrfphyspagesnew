import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Tbook = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Books for quantum computing
            </h1>
            <br />
            <p>
                Some of the best books for quantum info and computing&#58;
            </p>

        </>
    );
}

export default Tbook;
