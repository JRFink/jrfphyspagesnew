import Link from 'next/link';
import style from '@/styles/general.module.css';

const Framekin = () => {
    return (
        <>
            <br /> 
            <Link href="/education/gp1/stuff" className={style.backtoLink}>Questions</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Frame &#10140; kin questions
            </h1>
            <br /> 
            <br />
            <div className={style.divFrameGreen}>
                <p>
                    1. Complete .. v<span><sup>2</sup></span> = 
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

export default Framekin;