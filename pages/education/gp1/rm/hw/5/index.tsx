import Link from 'next/link';
import style from '@/styles/general.module.css';

const Rm5 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br />
            <h1 className={style.centerText}>
                Extended bodies and rotation hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/rm/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/rm/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/rm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/rm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/rm/hw/5" className={style.yellowLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 5
            </p>
            <h3 className={style.h3num}>
                A
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <button className={style.greenButton}>Check answer</button>
            <br />
            <h3 className={style.h3num}>
                B
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <button className={style.greenButton}>Check answer</button>
            <br />
            <h3 className={style.h3num}>
                C
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <button className={style.greenButton}>Check answer</button>
            <br />
            <h3 className={style.h3num}>
                D
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <button className={style.greenButton}>Check answer</button>
            <br /> 
            <br />
            <br />
            <br />
            <div className={style.centerInADiv}>
                <button className={style.greenButton}>Submit hw</button>
            </div>
        </>
    );
}

export default Rm5;