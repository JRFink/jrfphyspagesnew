import Link from 'next/link';
import style from '@/styles/general.module.css';

const Vec1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Vectors hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/vec/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/vec/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/vec/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/vec/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/vec/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                  <li>Defining vectors</li>
                  <li>Vector addition, subtraction</li>
                  <li>Dot product</li>
                  <li>Cross product</li>
                  <li>Vectors and phys</li>
             </ul>
            </p>
        </>
    );
}

export default Vec1;