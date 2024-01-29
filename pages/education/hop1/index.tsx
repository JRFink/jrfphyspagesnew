import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hop1 = () => {
    return (
        <>
            <br />
            <Link href="/education" className={style.backtoLink}>Education</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                History of Physics 1
            </h1>
            <br />
            <div className={style.centerInADiv}>
                <Link href="/education/hop1/original" className={style.generalLink}>
                    Original papers
                </Link>
                <br />
                <br />
                &#42;  &#42;  &#42;
                <br />
                <br />
            </div>
            <Link href="/education/hop1/first" className={style.generalLink}>Physics in the first civilizations</Link>
            <br />
            <Link href="/education/hop1/west" className={style.generalLink}>Physics in the western civilizations</Link>
            <br />
            <Link href="/education/hop1/east" className={style.generalLink}>Physics in the eastern civilizations</Link>
            <br />
        </>
    );
}

export default Hop1;
