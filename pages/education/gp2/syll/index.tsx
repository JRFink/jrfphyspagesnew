import Link from 'next/link';
import style from '@/styles/general.module.css';

const Syll = () => {
    return (
        <>
            <br /> 
                <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link> 
            <br /> 
            <h1 className={style.centerText}>
                Syllabus
            </h1>
            <p>
                Syllabus for gen phys 2..
            </p>
        </>
    );
}

export default Syll;