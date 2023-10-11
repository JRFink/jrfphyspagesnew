import Link from 'next/link';
import style from '@/styles/general.module.css';
import Hwheader from '../hwnav/hwnavb';

const Diff1 = () => {
    return (
        <>
            <Hwheader />
            <div className={style.flexContainer}>
                <Link href="/education/gp1/diff/hw/1#head" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/diff/hw/2#head" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/diff/hw/3#head" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/diff/hw/4#head" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/diff/hw/5#head" className={style.generalLink}>5</Link>
                <br />
            </div>
            <h2>
                First order
            </h2>
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

export default Diff1;