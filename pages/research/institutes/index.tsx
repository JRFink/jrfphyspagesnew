import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Inst = () => {
    return (
        <>
            <br />
            <Link href="/research" className={style.backtoLink}>Research</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Institutes
            </h1>
            <br />
            <p>
                Below are some physics and science institutes.
            </p>
            <p>
                <ul>
                    <li>
                        <Link href="https://perimeterinstitute.ca/">Perimeter Institute</Link>
                        <ul>
                            <li>
                                Focus - physics
                            </li>
                            <li>
                                Director - Robert Meyers
                            </li>
                            <li>
                                Location - 31 Caroline Street North,
                                <br />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Waterloo, Ontario, CA N2L 2Y5
                            </li>
                            <li>
                                Contact - &#40;1&#41; 519 569 7600
                            </li>
                            <li>
                                Funding - 
                                <ul>
                                    <li>Government of Canada through NSERC &#40;2022&#41; - &#36;20 million</li>
                                    <li>Government of Ontario &#40;2022&#41; - &#36;24 million</li>
                                    <li>Mike Lazaridis - &#36;150 million+</li>
                                    <li>BMO financial group - &#36;4 million</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="https://astera.org/">Astera Institute</Link>
                        <ul>
                            <li>
                                Focus - AI, information dissemination, climate
                            </li>
                            <li>
                                Director - Jed McCaleb
                            </li>
                            <li>
                                Location - Berkeley, CA
                            </li>
                            <li>
                                Contact - info@astera.org
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="https://www.moore.org/programs/science">Gordon and Betty Moore Foundation</Link>
                        <ul>
                            <li>
                                Focus - scientific research, bio
                            </li>
                            <li>
                                President - Harvey Fineberg
                            </li>
                            <li>
                                Location - 1661 Page Mill Road 
                                <br />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Palo Alto, CA 94304
                            </li>
                            <li>
                                Contact - 650 213 3000
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </p>
        </>
    );
}

export default Inst;