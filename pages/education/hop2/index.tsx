import Link from 'next/link';
import style from '@/styles/general.module.css';


const Hop2 = () => {
    return (
        <>
            <br />
            <Link href="/education/topics" className={style.backtoLink}>Topics</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                History of Physics 2
            </h1>
            <br />
            <div className={style.centerInADiv}>
                <Link href="/education/hop2/original" className={style.generalLink}>
                    Original papers
                </Link>
            <br />
            <br />
            &#42;  &#42;  &#42;
            <br />
            </div>
            <h2 className={style.numberLink}>
                1
            </h2>
            <Link href="/education/hop2/hist" className={style.generalLink}>
                More historical survey
            </Link>
            <br />
            <h2 className={style.numberLink}>
                2
            </h2>
            <Link href="/education/hop2/cm" className={style.generalLink}>
                Newton and development of classical mechanics
            </Link>
            <br />
            <h2 className={style.numberLink}>
                3
            </h2>
            <Link href="/education/hop2/em" className={style.generalLink}>
                Development of electromagnetism
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                4
            </h2>
            <Link href="/education/hop2/rel" className={style.generalLink}>
                Development of relativity
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                5
            </h2>
            <Link href="/education/hop2/qm" className={style.generalLink}>
                Development of quantum mechanics
            </Link>
            <br />
            <h2 className={style.numberLink}>
                6
            </h2>
            <Link href="/education/hop2/20" className={style.generalLink}>
                Physics through 20<span><sup>th</sup></span> century
            </Link>
            <br /> 
            <h2 className={style.numberLink}>
                7
            </h2>
            <Link href="/education/hop2/res" className={style.generalLink}>
                Modern research areas
            </Link>
        </>
    );
}

export default Hop2;