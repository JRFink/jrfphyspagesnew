import Link from 'next/link';
import style from '@/styles/general.module.css';
import Hwheader from '../hwnav/hwnavb';

const Onedm4 = () => {
    return (
        <>
            
            <Hwheader />
            <div className={style.flexContainer}>
                <Link href="/education/cm1/energ/hw/1#head" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/cm1/energ/hw/2#head" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/cm1/energ/hw/3#head" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/cm1/energ/hw/4#head" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/cm1/energ/hw/5#head" className={style.generalLink}>5</Link>
                <br />
                <Link href="/education/cm1/energ/hw/6#head" className={style.generalLink}>6</Link>
                <br />
                <Link href="/education/cm1/energ/hw/7#head" className={style.generalLink}>7</Link>
                <br />
                <Link href="/education/cm1/energ/hw/8#head" className={style.generalLink}>8</Link>
                <br />
                <Link href="/education/cm1/energ/hw/9#head" className={style.generalLink}>9</Link>
                <br />
                <Link href="/education/cm1/energ/hw/10#head" className={style.generalLink}>10</Link>
                <br />
                <Link href="/education/cm1/energ/hw/11#head" className={style.yellowLink}>11</Link>
                <br />
            </div>
            <h2>
           
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
            <br />
            <br />
            <div className={style.centerInADiv}>
                <button className={style.greenButton}>Submit hw</button>
            </div>
        </>
    );
}

export default Onedm4;