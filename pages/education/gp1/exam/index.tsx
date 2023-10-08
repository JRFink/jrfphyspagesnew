import Link from 'next/link';
import style from '@/styles/general.module.css';


const Exam = () => { 
  return (
    <>
         <br /> 
         <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
         <br />
         <h1 className={style.centerText}>
             Exams 
         </h1>
       <p> 
           Hello, and welcome to the exam page. 
       </p>
       <p> 
         We will proctor our own
         exams through video software. Right now we are building the proctoring program! 
        </p>
        <p>
            Below you will find some helpful information. 
        </p>
        <p>
            Find a sample exam
            <Link href="/education/gp1/exam/sample" className={style.highlightText}>here</Link>
        </p>
        <br />
            <h2>
            Test 1
            </h2>
<p> 
            <span className={style.highlightTextBlue}>Date</span> of exam 1: 
            <ul>
                <li>
                    Not more than 2 weeks after you finish chapter 6.
                </li>
            </ul>
       </p> 
              <ul> 
                     <li> 
                         Frames, units, measurement 
                     </li> 
                     <li> 
                         Vectors 
                     </li> 
                     <li> 
                         Applications of calc 
                     </li> 
                    <li>
                        Idealized models 
                    </li>
                     <li> 
                         Motion in 1, 2, and 3 dimensions 
                     </li>
                </ul>
            <h2>
                Test 2 
            </h2>
<p> 
            <span className={style.highlightTextBlue}>Date</span> of exam 2: 
            <ul>
                <li>
                    Not more than 2 weeks after you finish chapter 11.
                </li>
            </ul>
       </p>
                <ul>
                    <li> 
                         Simple differential equations 
                     </li> 
                     <li> 
                         Newton&#39;s first, second, and third law 
                     </li> 
                     <li> 
                         Applications of Newton&#39;s laws 
                     </li> 
                     <li> 
                         Work and kinetic energy 
                     </li> 
                     <li> 
                         Potential energy and energy conservation 
                     </li>
                </ul>
            <h2>
                Test 3 
            </h2>
<p> 
            <span className={style.highlightTextBlue}>Date</span> of exam 3: 
            <ul>
                <li>
                    Not more than 2 weeks after you finish chapter 17.
                </li>
            </ul>
       </p>
                <ul>
                    <li> 
                         Momentum, impulse, and collisions 
                     </li> 
                     <li> 
                         Rotational motion 
                     </li> 
                     <li> 
                         Dynamics of rotational motion 
                     </li> 
                     <li> 
                         Equilibrium 
                     </li> 
                     <li> 
                         Taylor expansions 
                     </li> 
                     <li> 
                         Gravity 
                     </li>
                </ul>
            <h2>
            Test 4 
            </h2>
  <p> 
            <span className={style.highlightTextBlue}>Date</span> of exam 4: 
            <ul>
                <li>
                    Not more than 1 week after you finish chapter 24.
                </li>
            </ul>
       </p>
              <ul>
                    <li> 
                         Fluids 
                     </li> 
                     <li> 
                         Oscillations 
                     </li> 
                     <li> 
                         Wave motion 
                     </li> 
                     <li> 
                         Temperature and heat 
                     </li> 
                     <li> 
                         Gases 
                     </li> 
                     <li> 
                         First two laws of thermodynamics 
                     </li>
                </ul>
                <br />
            <h2>
                Final exam 
            </h2>
<p> 
            <span className={style.highlightTextBlue}>Date</span> of final: 
            <ul>
                <li>
                    Not more than 1 week after you tale exam 4.
                </li>
            </ul>
       </p>
                <p>
                    All previous topics 
                </p>
                <p>
                    Register for final exam <Link href="/education/gp1/exam/final">here</Link>.
                </p> 
                <br /> 
    </>
  );
}

export default Exam;
