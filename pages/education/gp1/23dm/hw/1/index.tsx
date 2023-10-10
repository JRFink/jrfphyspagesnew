import Link from 'next/link';
import style from '@/styles/general.module.css';

const Two3dm1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                2-3 dimension hw
            </h1>
            <div className={style.flexContainer}>
                <Link href="/education/gp1/23dm/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/23dm/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                Some hw 1
                <br />
                <br />
                You can submit hw on the last question.
            </p>
        </>
    );
}

export default Two3dm1;