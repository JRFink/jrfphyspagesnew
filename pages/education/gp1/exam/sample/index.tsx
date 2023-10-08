import Link from 'next/link';
import style from '@/styles/general.module.css';

const Sample = () => { 
   return (
    <> 
        <br /> 
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
        <br />
        <h1 className={style.centerText}>
            Sample exam 
        </h1>
            <p>
                Score is out of 100 points. 
            </p>
            <p> 
                Your score is:
            </p>
            <br />
        <h2>
            Multiple choice 
        </h2>
         <p>
        <ul>
            <p>
            Frames, units, and measurement
            </p>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
            <p>
                Vectors
            </p>
                 <li>B</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
            <p>
                Calc
            </p>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
            <p>
                Idealized models
            </p>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>  
            <p>
                Motion in 1, 2, and 3 dimensions 
            </p>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
             </ul>
         </p>
        <br />
        <h2>
            Short response
        </h2>
            <p>
                <ul>
                    <li>Describe an inertial reference frame</li>
                    <li>Describe how calculus relates to motion in one dimension</li>
                    <li>Discuss a physical situation where we use both an idealized model and a realistic model for the situation. How much error is introduced when we use the idealized model?</li>                                                
                </ul>
            </p> 
      <br />
      <h2>
         Long response
      </h2>
        <p> 
          <ul>
              <li>Relate...</li>
              <li>Explain...</li>
              <li>What is an easy way to describe motion?</li>
          </ul>
        </p>
   </>
  );
}

export default Sample;