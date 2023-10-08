import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import pendulum from '@/public/images/pendulum.svg';
import { ModoverviewTaylor } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import TaylorVid from '@/public/videos/gp1/taylor';
import Summary from '@/pages/components/summary';
import TaylorEx from '@/pages/exercises/gp1/taylorex';
// import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';


const Taylor = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Taylor Expansion
            </h1>
            <br></br>
            <ModoverviewTaylor />
            <br></br>
            <TaylorVid />
            <br />
            <LearnGoal />
            <p> 
                In the preceeding sections, we solved problems with the kinematic approach, the differential equation approach, and used conservation laws to solve problems. Here, we learn a mathematical technique that will allow us to solve other types of problems. Specifically, when there is a small change to a physical system, we can use a mathematical technique called <em> taylor expansion</em> to solve the problem. This approach gives an approximate solution, and can only be used when a change to the physical system is small. 
            </p> 
            <br /> 
            <br />  
  <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
  <br />
            <h2 className={style.h2SectionColor} id="intro">
                1. Theory
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="app">
                2. Application to physical problems
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="ex">
                3. Further examples
            </h2>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={pendulum}
                    style={{
                        width: '80%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="A green bob attached to a blue pendulum" 
                />
            </div>
<Summary /> 
<br />
            <br></br>
            <br></br>
            <TaylorEx />
            <br></br>
            <br></br>
            {/* <OnedmQz /> */}
            <br />
            <br /> 
            <Link href="/education/gp1/g" className={style.backtoLink}>Gravity &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Taylor;