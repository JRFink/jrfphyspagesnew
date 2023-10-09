import Link from 'next/link';
import style from '@/styles/general.module.css';
import Quizheading from '@/pages/components/quizHeading';
import Idealquiz from '@/pages/education/gp1/ideal/quiz';

const Id = () => { 
  return (
    <>
        <br />
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
        <br />
        <h1 className={style.centerText}>
          Idealized models
        </h1>
        <br />
  <h2 className={style.h2SectionColor}>  
                 1. Models  
             </h2> 
        <br />
 <p>
            Models are useful because they help us apply the same principles to a range of phenomena.
          </p>
        <Quizheading />
        <br />
        <br />
        <Idealquiz />
        <br />
        <br />
    </>
  );
} 
export default Id;
