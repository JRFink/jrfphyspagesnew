import Link from 'next/link';
import style from '@/styles/general.module.css';

const Applnl1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Applying newton&#39;s laws hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/applnl/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/applnl/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/applnl/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/applnl/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/applnl/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Using the first</li>
                    <li>Using the second</li>
                    <li>Force as a function of position</li>
                    <li>Force as a function of time</li>
                    <li>Force as function of something else</li>
                    <li>Constant forces</li>
                    <li>Friction</li>
                    <li>Tension</li>
                    <li>Free-fall with approximate a</li>
                    <li>Drag force</li>
                    <li>Using the third</li>
                    <li>Circular motion</li>
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

export default Applnl1;