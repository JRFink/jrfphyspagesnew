import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import clock from '@/public/images/clock.png';
import Helpful from '@/pages/components/helpful';

const Stand = () => {

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Standards and constants
                </h1>
            </div>
                <br></br>
                <p>
                    Below are some interesting standards and constants for physics. Check em out!
                </p>
            <br></br>
            <p>
                <ul>
                    <li>
                        Time: {date.toLocaleTimeString()}
                    </li> 
                    <br></br>
                    <li>
                        <Link href="https://www.time.gov">More time &#38; UTC</Link>
                    </li>
                    <br></br>
                    <li>
                        Charge of the electron: 1.602176634 * 10^&#40;-19&#41; coulomb. 
                        It is a defined value, but I think the uncertainty part is complicated. <Link href="https://www.nist.gov/si-redefinition/meet-constants">Ref</Link>. &nbsp;
                        <Link href="https://physics.stackexchange.com/questions/730912/illogical-choice-for-the-new-definition-of-the-charge-of-the-electron-by-the-28t">Again</Link>.
                    </li>
                </ul>
            </p>
            <br></br>
            <br></br>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image            
                    src={clock}
                    style={{
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The bloch sphere on a white background" 
                />
            </div>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Stand;