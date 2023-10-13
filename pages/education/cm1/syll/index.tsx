import Link from 'next/link';
import style from '@/styles/general.module.css';

const Syll = () => {
    return (
        <>
            <br /> 
            <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Syllabus
            </h1>
            <p>
                Syllabus for Classical mechanics 1...
            </p>
        </>
    );
}

export default Syll;