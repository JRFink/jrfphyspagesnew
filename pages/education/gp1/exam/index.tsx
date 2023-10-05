import Link from 'next/link';
import style from '@/styles/general.module.css';

const Exam = () => { 
  return (
     <>
         <br /> 
         <Link href="/education/gp1" className={style.className}>Gen phys 1</Link>
         <br />
         <h1 className={style.centerText}>
             Exams 
         </h1>
       <p> 
           Hello, and welcome to the exam page. 
       </p>
       <p> 
         We will proctor our own
         exams through video software. Below you will find lots of 
         helpful information. 
       </p>
       <p> 
            Date of exam 1: 
            <ul>
                  <li>Not more than 2 weeks after you finish chapter 5.</li>
            </ul>
       </p> 
     </>
  );
}

export default Exam;
