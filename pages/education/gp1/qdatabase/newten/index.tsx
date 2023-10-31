import Link from 'next/link';
import style from '@/styles/general.module.css';

const Newten = () => {
    return (
        <>
            <br /> 
            <Link href="/education/gp1/qdatabase" className={style.backtoLink}>Questions</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Newton &#10140; energy questions
            </h1>
            <br /> 
            <br />
            <div className={style.divFrameGreen}>
                <p>
                    1. A ball falls from a height <em>h</em>. What is its speed at the bottom? 
                    &#40;Do this in two different ways&#41;
                </p>
                <br />
                <br />
                <label>Answer: &nbsp; </label>
                <input type="text"></input>
                <div className={style.centerInADiv}>
                    <button className={style.greenButton}>Check ans</button>
                </div>
            </div>
        </>
    );
}

export default Newten;