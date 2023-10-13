import Link from 'next/link';
import style from '@/styles/general.module.css';

const Exam = () => {
    return (
        <>
            <br /> 
            <Link href="/education/cm1" className={style.backtoLink}>Class mech 1</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Exams
            </h1>
            <p>
                Exams for classical mechanics 1...
            </p>
        </>
    );
}

export default Exam;