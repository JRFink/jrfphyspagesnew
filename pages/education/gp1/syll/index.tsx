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
                 An introduction to general physics. It will cover the following topics:  
                 <br></br> 
                 <br></br> 
                 &nbsp; &nbsp; kinematics, forces &#40;newton&#39;s laws&#41;, work, energy, rotational motion, taylor expansion, gravity, waves, fluid motion, and intro thermodynamics.  
                 <br></br><br></br> 
                 The class consists of ~ 20 modules, which consist of lecture videos, homework assignments, quizzes, exams, an extra credit paper, and a final exam. 
                 I hope you enjoy it, and please give me your <Link href="/contact">feedback</Link> as you go through it. 
                 <br></br> 
                 <br></br> 
  
             </p> 
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
     I am going to offer office hours! Schedule is tbd, but you can reach me by sending an email to..
</p>
      <h2>
           Grades 
      </h2>
      <p>
          Total course points is 1&#44;000. Division is:
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
<li> A >= 93% </li>
<li> 90 % <= A - < 93 % </li>
<li> 87 % <= B + < 90 % </li>
<li> 83 % <= B < 87 % </li>
<li> 80 % <= B - < 83 % </li>
<li> 77 % <= C + < 80 % </li>
<li> 73 % <= C < 77 % </li>
<li> 70 % <= C - < 73 % </li>
<li> F < 70 % </li>
</ul>
</p>

<h2>
     Academic honesty
</h2>
<p>
     By signing the registration form for this class you agree to the academic honestly policy. In short, you agree that the work you do is your own. Whether you are submitting homework, completing quizzes or exams, or doing the extra credit paper, you agree that what you submit reflects your own understanding. Failure to abide by this policy may result in failure of the class.
</p>
<h2> 
     Accommodations
</h2>
<p> 
     If you need accommodations for this class please reach out to us directly. We will work together to find a solution. 
</p>

      </p>
     </>
    );
} 
export default Syll;
