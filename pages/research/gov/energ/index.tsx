import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Energ = () => {
    return (
        <>
            <br />
            <Link href="/research/gov" className={style.backtoLink}>Gov</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Energy
            </h1>
            <br />
            <p>
                Below you will find some info about energy around the globe. 
            </p>
            <p>
                A large project under development for producing energy is the tokamak project through <Link href="https://www.iter.org/">ITER</Link>. 
                <br />
                <br />
                The countries that have the highest electricity usage per capita are Iceland, Norway, and Bahrain. 
            </p>
        </>
    );
}

export default Energ;