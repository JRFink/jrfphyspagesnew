import style from '@/styles/general.module.css';

const Syll = () => { 

  return (
     <>
       <h1 className={style.centerText}>
          Syllabus 
       </h1>
      <h2>
           Grading 
      </h2>
      <p>
          Total course points is 1&#44;000. Division is:
<ul>
   <li>Homework - 250 pts</li>
   <li>Quizzes - 100 pts</li>
   <li>Exam 1 - 100 pts</li>
   <li>Exam 2 - 100 pts</li>
   <li>Exam 3 - 100 pts</li>
   <li>Exam 4 - 100 pts</li>
   <li>Final exam - 250 pts</li>
</ul>
<p>
    Grade division is...
</p>
      </p>
     </>
    );
} 
export default Syll;
