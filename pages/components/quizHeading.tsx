import style from '@/styles/general.module.css';

const Quizheading = () => {
    return (
        <>
            <h2 className={style.quizHeading} id="quiz">
                Quiz
            </h2>
            <p> 
                 Begin quiz...
            </p>
        </>
    );
}

export default Quizheading; 