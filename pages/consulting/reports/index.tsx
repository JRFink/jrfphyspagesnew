import Link from 'next/link';
import style from '@/styles/general.module.css';

const Report = () => {
    return (
        <>
            <br /> 
            <Link href="/consulting" className={style.backtoLink}>Consulting</Link>
            <h1 className={style.centerText}>
                Reports
            </h1>
            <p>
                Here we will have some reports for free and others for purchase. Examples will include... 
            </p>
            <p>
                <ul>
                    <li>List of all colleges in the united states</li>
                    <li>Education policy in argentina</li>
                    <li>high school graduation rates in georgia</li>
                </ul>
  You can make a sample purchase <Link href="https://buy.stripe.com/28oeYtara5qhd5maEO">here</Link>
            </p>
        </>
    );
}

export default Report;