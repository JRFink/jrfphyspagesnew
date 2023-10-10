import Link from 'next/link';
import style from '@/styles/general.module.css';

const Pmv4 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Frame hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/pmv/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/pmv/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/pmv/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/pmv/hw/4" className={style.yellowLink}>4</Link>
                <br />
                <Link href="/education/gp1/pmv/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 4
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

export default Pmv4;