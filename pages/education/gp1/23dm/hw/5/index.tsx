import Link from 'next/link';
import style from '@/styles/general.module.css';
import Hwheader from '../hwnav/hwnavb';

const Onedm5 = () => {
    return (
        <>
            <Hwheader />
            <div className={style.flexContainer}>
                <Link href="/education/gp1/23dm/hw/1#home" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/2#home" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/3#home" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/4#home" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/5#home" className={style.yellowLink}>5</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/6#home" className={style.generalLink}>6</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/7#home" className={style.generalLink}>7</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/8#home" className={style.generalLink}>8</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/9#home" className={style.generalLink}>9</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/10#home" className={style.generalLink}>10</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/11#home" className={style.generalLink}>11</Link>
                <br />
            </div>
            <h2>
                Instantaneous velocity in 2-3d
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
            <br /> 
            <br />
        </>
    );
}

export default Onedm5;