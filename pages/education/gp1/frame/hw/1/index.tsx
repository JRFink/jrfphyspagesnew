import Link from 'next/link';
import style from '@/styles/general.module.css';

const Frame1 = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link>
            <br></br>
            <h1 className={style.centerText}>
                Frame hw
            </h1>
                <div className={style.flexContainer}>
                <Link href="/education/gp1/frame/hw/1" className={style.yellowLink}>1</Link>
                <br />
                <Link href="/education/gp1/frame/hw/2" className={style.generalLink}>2</Link>
                <br />
                <Link href="/education/gp1/frame/hw/3" className={style.generalLink}>3</Link>
                <br />
                <Link href="/education/gp1/frame/hw/4" className={style.generalLink}>4</Link>
                <br />
                <Link href="/education/gp1/frame/hw/5" className={style.generalLink}>5</Link>
                <br />
            </div>
            <p>
                <ul>
                    <li>Frames</li>
                    <li>Your frame</li>
                    <li>Relative frame</li>
                    <li>Inertial and non-inertial frame</li>
                    <li>Units</li>
                    <li>Dimensional analysis</li>
                    <li>Gov standards</li>
                    <li>Measurement</li>
                    <li>Significant figures</li>
                    <li>Uncertainty</li>
                </ul>
            </p>
            <h2>
                Topic
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

export default Frame1;