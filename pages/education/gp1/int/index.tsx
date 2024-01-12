import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful';

const Int = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Introduction
            </h1>
            <p>
                A large goal of physics is to describe motion on a fundamental level. <em>How do we describe a car moving on a track? 
                How do we describe a satellite going around the earth? How do we describe the motion of the electron going around the proton? </em>
                In accomplishing this task, we have different methods available. We can divide physics into these categories...
                <ol>
                    <li>Big objects moving slow whose net electric charge is ~ zero</li>
                    <p>
                        Gen phys 1. <br />
                        You can also cover these subjects using a different method <Link href="/#classical">here</Link>.
                    </p>
                    <li>Big objects moving fast whose net electric charge is ~ zero</li>
                    <p>
                        Relativity
                    </p>
                    <li>Big objects moving slow or fast whose net electric charge is not zero</li>
                    <p>
                        <Link href="/education/em1">Electricity and magnetism</Link>
                    </p>
                    <li>Small objects moving slow</li>
                    <p>
                        <Link href="/education/qm1">Quantum mechanics</Link> 
                    </p>
                    <li>Small objects moving fast</li>
                    <p>
                        Quantum field theory
                    </p>
                </ol>
            </p>
            <p>
                So let&#39;s get into it. 
            </p>
            <br></br>
            <Link href="/education/gp1/frame" className={style.backtoLink}>Frames, units, and measurement &#10140;</Link>
            <br />
            <br />
            <Helpful />
        </>
    );
}

export default Int;