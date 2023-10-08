import Link from 'next/link';
import style from '@/styles/general.module.css'; 
    
const Syll = () => { 

  return (
     <>
<br />
<Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
<br />
       <h1 className={style.centerText}>
          Syllabus 
       </h1>
            <h2> 
                 Description 
             </h2> 
             <p> 
                 An introduction to general physics. It will cover the following 24 topics:  
                 <br></br> 
                 <br></br> 
                 &nbsp; &nbsp; frames, units, and measurement; vector review; calculus review; idealized models; motion in 1, 2, 3 dimensions; differential equations crash course; newton&#39;s laws; applying newton&#39;s laws; work and energy; conservation of energy; momentum, impulse, and collisions; rotational motion; dynamics of rotational motion; equilibrium and elasticity; taylor expansion; gravity; fluids; oscillations; waves; temperature and heat; gases; first law of thermo; second law of thermo. 
                 <br /> 
<br />
                 Each section contains lecture videos, homework assignments, and quizzes. 
<br /> 
<p>
The class contains 4 midterm exams and a final exam. 
<br /> 
There is also an extra credit paper, which can add 5&#44; to your grade. 
<br />
Please give me your <Link href="/contact">feedback</Link> as you go through the class.
</p> 
                 <br></br> 
                 <br></br> 
  
             <h2> 
                 Prerequisites 
             </h2> 
             <p> 
                 Algebra, geometry, trigonometry 
             </p> 
             <h2> 
                 Course number 
             </h2> 
             <p> 
                 Phys 101 
             </p> 
             <h2> 
                 Location 
             </h2> 
             <p> 
                 Asynchronous online 
             </p> 
             <h2> 
                 Instructor 
             </h2> 
             <p> 
                 Jeff Fink 
             </p>
<h2> 
     Office hours 
</h2>
<p> 
     Schedule is tbd, but you can reach me by email at..
</p>
      <h2>
           Grades 
      </h2>
      <p>
          Total course contains 1&#44;000 points. Extra credit paper is possible 50 points. Division is:
</p>
<p>
<ul>
   <li>Homework - 250 pts</li>
   <li>Quizzes - 100 pts</li>
   <li>Exam 1 - 100 pts</li>
   <li>Exam 2 - 100 pts</li>
   <li>Exam 3 - 100 pts</li>
   <li>Exam 4 - 100 pts</li>
   <li>Final exam - 250 pts</li>
</ul>
    Grade division is...
<ul>
<li> A &gt;= 93% </li>
<li> 90 % &lt;= A - &lt; 93 &#37; </li>
<li> 87 % &lt;= B + &lt; 90 &#37; </li>
<li> 83 % &lt;= B &lt; 87 &#37; </li>
<li> 80 % &lt;= B - &lt; 83 &#37; </li>
<li> 77 % &lt;= C + &lt; 80 &#37; </li>
<li> 73 % &lt;= C &lt; 77 &#37; </li>
<li> 70 % &lt;= C - &lt; 73 &#37; </li>
<li> F &lt; 70 &#37; </li>
</ul>
</p>

<h2>
     Academic honesty
</h2>
<p>
     By signing the registration form for this class, you agree to the academic honestly policy. In short, you agree that the work you submit is your own. Whether you submit homework, quizzes, exams or the extra credit paper, you agree that the work is yours and reflects your own understanding. Failure to abide by this may result in failure of the class.
</p>

<h2> 
     Accommodations
</h2>
<p> 
     If you need accommodations for this class please reach out to us directly. We will work together to find a solution. 
</p>
            <p> 
                 <Link href="/pdf/gp1syl.pdf" download>Download syllabus</Link> 
             </p>

     </>
    );
} 

export default Syll;
