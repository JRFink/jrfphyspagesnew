import Link from 'next/link';
import style from '@/styles/general.module.css';

const FrameHw = () => {
    return (
        <>
            <br />
            <Link href="/education/gp1/hw" className={style.backtoLink}>Homework</Link><br></br>
            <br></br>
            <br></br>
            <h1 className={style.centerText}>
                Frame hw
            </h1>
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
        </>
    );
}

export default FrameHw;