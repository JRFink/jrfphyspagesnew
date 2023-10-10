import Link from 'next/link';
import style from '@/styles/general.module.css';

const Quizzes = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <h1 className={style.centerText}>
                Quizzes
            </h1>
            <p>
                This page will list all the quizzes for each section. 
                The questions for the quizzes don&#39;t change. 
                <br />
                If you want dynamic questions visit the <Link href="/education/gp1/stuff">question database</Link>.
            </p>
        </>
    );
}

export default Quizzes;