import Link from 'next/link';
import style from '@/styles/general.module.css';

const Exam = () => {
    return (
        <>
            <br /> 
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Exams
            </h1>
            <p>
                Exams for general physics 2...
            </p>
        </>
    );
}

export default Exam;