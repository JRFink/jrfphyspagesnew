import Link from 'next/link';
import style from '@/styles/general.module.css';

const Flaw1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                First law hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/flaw/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/flaw/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/flaw/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/flaw/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/flaw/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>First law</li>
                </ul>
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
        </>
    );
}

export default Flaw1;