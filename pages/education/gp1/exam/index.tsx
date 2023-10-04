import Link from 'next/link';
import style from '@/styles/general.module.css';

const Exam = () => { 
  return (
     <>
         <h1 className={style.centerText}>
             Exams 
         </h1>
       <p> 
           Hello, and welcome to the exam page. 
       </p>
       <p> 
           This is an online class, but we still 
         have to issue exams. We will proctor our own
         exams through video. Below you will find lots of 
         helpful information. 
       </p>
     </>
  );
}

export default Exam;
