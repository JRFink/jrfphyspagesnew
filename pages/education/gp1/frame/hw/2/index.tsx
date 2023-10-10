import Link from 'next/link';
import style from '@/styles/general.module.css';
import Hwheader from '../hwnav/hwnavb';

const Onedm2 = () => {
    return (
        <>
            <Hwheader />
            <div className={style.flexContainer}>
                <Link href="/education/gp1/frame/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/frame/hw/2" className={style.yellowLink}>2</Link>
                <br />
                <Link href="/education/gp1/frame/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/frame/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/frame/hw/5" className={style.generalLink}>5</Link>
                <br />
                <Link href="/education/gp1/frame/hw/6" className={style.generalLink}>6</Link>
                <br />
                <Link href="/education/gp1/frame/hw/7" className={style.generalLink}>7</Link>
                <br />
                <Link href="/education/gp1/frame/hw/8" className={style.generalLink}>8</Link>
                <br />
                <Link href="/education/gp1/frame/hw/9" className={style.generalLink}>9</Link>
                <br />
                <Link href="/education/gp1/frame/hw/10" className={style.generalLink}>10</Link>
                <br />
                <Link href="/education/gp1/frame/hw/11" className={style.generalLink}>11</Link>
                <br />
            </div>
            <h2>
                Your own frame
            </h2>
            <h3 className={style.h3num}>
                A
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <br />
            <br />
            <button className={style.greenButton}>Check answer</button>
            <br />
            <br />
            <h3 className={style.h3num}>
                B
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <br />
            <br />
            <button className={style.greenButton}>Check answer</button>
            <br />
            <br />
            <h3 className={style.h3num}>
                C
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <br />
            <br />
            <button className={style.greenButton}>Check answer</button>
            <br />
            <br />
            <h3 className={style.h3num}>
                D
            </h3>
            <br />
            &nbsp; &nbsp; <label>Answer: </label>
            <input type="text"></input>
            <br />
            <br />
            <button className={style.greenButton}>Check answer</button>
        </>
    );
}

export default Onedm2;