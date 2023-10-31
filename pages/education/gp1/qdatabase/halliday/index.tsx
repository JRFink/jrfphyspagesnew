import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Halliday = () => {

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
            <br /> 
            <Link href="/education/gp1/qdatabase" className={style.backtoLink}>Questions</Link> 
            <br /> 
            <br />
            <h1 className={style.centerText}>
                Halliday 10th edition &#169;
            </h1>
            <br /> 
            <p>
                Here are the problems and some working solutions to help you. They follow the textbook problems.
            </p>
            <h2>
                Chapter 1
            </h2>
            <p>
                1. 
                <p>
                    Earth is approximately a sphere of radius 6.37 x 10<span><sup>6</sup></span>m. What are &#40;a&#41;
                    its curcumference in kilometers, &#40;b&#41; its surface area in square kilometers, and &#40;c&#41; its 
                    volume in cubic kilometers?
                </p>
           
            </p>
            <h2>
                Chapter 2
            </h2>
            <p> 
                10. 
                <p>
                    Suppose that a passenger intent on lunch during his first ride in a hot-air balloon accidentally 
                    drops an apple over the side during the balloon&#39;s liftoff. At the moment of the apple&#39;s release, 
                    the balloon is accelerating upward with a magnitude of 4.0 m/s<span><sup>2</sup></span> and has an 
                    upward velocity of magnitude 2 m/s. What are the &#40;a&#41; magnitude and &#40;b&#41; direction of the 
                    acceleration of the apple just after it is released? &#40;c&#41; Just then, is the apple moving upward or downward, 
                    or is it stationary? &#40;d&#41; What is the magnitude of its velocity just then? &#40;e&#41; In the next 
                    few moments, does the speed of the apple increase, decrease, or remain constant?
                </p>
            </p>
            <h2>
                Chapter 3
            </h2>
            <p>
                6.
                <p>
                    Describe two vectors {"\\( \\overrightarrow{a} \\)"} and {"\\( \\overrightarrow{b} \\)"} such that 
                    <br />
                    &#40;a&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{c} \\)"} 
                    &nbsp; and &nbsp; {"a + b = c"} 
                    <br />
                    &#40;b&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{a} - \\overrightarrow{b}  \\)"} 
                    <br />
                    &#40;c&#41; &nbsp; {"\\( \\overrightarrow{a} + \\overrightarrow{b} = \\overrightarrow{c} \\)"} 
                    &nbsp; and &nbsp; {"\\( a^{2} + b^{2} = c^{2} \\)"} 
                    <br />
                </p>
            </p>
            <h2>
                Chapter 15
            </h2>
                <h3>Questions</h3>
                    <p>
                        4. 
                        <p>
                            Which of the following relationships between the acceleration <em>a</em> and the displacement <em>x </em> 
                            of a particle involve SHM: &#40;a&#41; <em>a</em> = 0.5x, &#40;b&#41; <em>a</em> = 400x<span><sup>2</sup></span>, 
                            &#40;c&#41; <em>a</em> = - 20x, &#40;d&#41; <em>a</em> = - 3x<span><sup>2 </sup></span>?
                        </p>
                    </p>
                <h3>Problems</h3>
                    <p>
                        1. 
                        <p>
                            An object undergoing simple harmonic motion takes 0.25s to travel from one point of zero velocity 
                            to the next such point. The distance between those points is 36 cm. Calculate the &#40;a&#41; 
                            period, &#40;b&#41; frequency, and &#40;c&#41; amplitude of the motion. 
                        </p>
                        3. 
                        <p>
                            What is the maximum acceleration of a platform that oscillates at atmplitude 2.20 cm and frequency 6.60 Hz? 
                        </p>
                    </p>
        </>
    );
}

export default Halliday;