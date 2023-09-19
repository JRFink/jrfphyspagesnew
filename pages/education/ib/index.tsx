import Link from 'next/link';
import style from '@/styles/general.module.css';

const IB = () => {
    return (
        <>
            <br />
            <Link href="/education" className={style.backtoLink}>Education</Link>
            <h1 className={style.centerText}>
                IB Physics
            </h1>
            <p>
                Find the curriculum requirements <a href="https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/physics/">here</a>. 
            </p>
        </>
    );
}

export default IB;