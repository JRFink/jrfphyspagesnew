import Link from 'next/link';
import style from '@/styles/general.module.css';

const Quiz = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Quizzes
            </h1>
            <p>
                Find all of the quizzes listed here...
            </p>
        </>
    );
}

export default Quiz;