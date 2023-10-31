import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';
import Hwheader from '../hwnav/hwnavb';

const Onedm1 = () => {

    useEffect(() => {
        if (typeof window?.MathJax !== "undefined") {
            window.MathJax.typeset()
        }
    },[])

    return (
        <>
            <Script 
                src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js"
                strategy="lazyOnload"
            />
            <Hwheader />
            <div className={style.flexContainer}>
                <Link href="/education/gp1/1dm/hw/1#head" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/2#head" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/3#head" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/4#head" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/5#head" className={style.generalLink}>5</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/6#head" className={style.generalLink}>6</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/7#head" className={style.generalLink}>7</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/8#head" className={style.generalLink}>8</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/9#head" className={style.generalLink}>9</Link>
                <br />
                <Link href="/education/gp1/1dm/hw/10#head" className={style.generalLink}>10</Link>
                <br />
            </div>
            <p>
                You can submit hw on the last question.
            </p>
            <h2>
                Position
            </h2>
            <p>
                x = x<span><sub>0</sub></span> + v t
            </p>
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

export default Onedm1;