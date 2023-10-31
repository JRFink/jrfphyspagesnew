import Link from 'next/link';
import style from '@/styles/general.module.css';

const Momgrav = () => {
    return (
        <>
            <br /> 
            <Link href="/education/gp1/qdatabase" className={style.backtoLink}>Questions</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Momentum &#10140; gravity questions
            </h1>
            <br /> 
            <br />
            <div className={style.divFrameGreen}>
                <p>
                    1. What is the definition of impulse?
                </p>
                <label>Answer: &nbsp; </label>
                <input type="text"></input>
                <div className={style.centerInADiv}>
                    <button className={style.greenButton}>Check ans</button>
                </div>
            </div>
        </>
    );
}

export default Momgrav;