import Link from 'next/link';
import style from '@/styles/general.module.css';

const Frame5 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br />
            <h1 className={style.centerText}>
                Temperature and heat hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/theat/hw/1" className={style.generalLink}>1</Link>
                <br />
                <Link href="/education/gp1/theat/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/theat/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/theat/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/theat/hw/5" className={style.yellowLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 5
            </p>
            <br /> 
            <br />
            <div className={style.centerInADiv}>
                <button className={style.greenButton}>Submit hw</button>
            </div>
        </>
    );
}

export default Frame5;