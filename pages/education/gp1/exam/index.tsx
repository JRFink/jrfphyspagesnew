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
Below you will find some 
         helpful information. 
       </p>
       <p> 
            Date of exam 1: 
            <ul>
                  <li>Not more than 2 weeks after you finish chapter 5.</li>
            </ul>
       </p> 
<p>
The exams will cover the following information...
</p>
<h2>
Test 1
</h2>
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
<h2>
Final exam 
</h2>
<p>
All previous topics 
</p>
<p>
Register for final exam <Link href="/exam/test/gp1/final">here</Link>.
</p> 
<br /> 
     </>
  );
}

export default Exam;
