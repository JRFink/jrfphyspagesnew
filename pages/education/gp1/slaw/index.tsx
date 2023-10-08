import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import { Modoverview2nd } from '@/pages/components/modoverview';
import LearnGoal from '@/pages/components/learngoal';
import second from '@/public/images/second.svg';
import Summary from '@/pages/components/summary';
import SlawEx from '@/pages/exercises/gp1/slawex';
import Quizheading from '@/pages/components/quizHeading';
import Helpful from '@/pages/components/helpful';

const Slaw = () => {
    return (
        <>
            <Link href="/education/gp1#intro" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Second law of Thermodynamics
            </h1>
            <Modoverview2nd /> 
            <br /> 
            <LearnGoal />
            <h2> 
                Introduction
            </h2> 
            <p> 
                Moving from the first law we proceed to the second. Its infamous. 
            </p> 
            <p> 
                The second law is about the arrangements of a system. We use it to understand how systems evolve over time, such as how a clean room becomes dirty. 
            </p> 
            <br />
            <br />
            <h2 className={style.h2SectionColor}> 
                Domain of the second law  
            </h2>
            <p> 
                The domain of the second law is... 
            </p>
            <br /> 
            <br />  
            <h2 className={style.h2SectionColor}> Solving a simple physics problem</h2>  
            <br />
            <p> 
                Consider an object A with 3 bit slots and object B with 3 bit slots. The bit slots can either be 0 or 1. If each bit is randomly generated, in what state are you most likely to find A and B collectively, as in A: _ _ _ B : _ _ _ .  
            </p>
            <br />
            <h2 className={style.h2SectionColor} id="ent"> 
                Entropy 
            </h2>
            <p>
                The second law is the statement that 
            </p>
            <br />
                 <div className={style.equationBox}> 
                     <div className={style.equation}>S = k Ln &#937;</div> 
                     <div className={style.equationNumber}>&#40;1&#41;</div> 
                 </div> 
                 <br />
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="eng"> 
                Engines 
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="ref"> 
                Refrigerators 
            </h2>
            <br></br>
            <br></br>
            <h2 className={style.h2SectionColor} id="stat"> 
                Statistics 
            </h2>
            <div  
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                }} 
            > 
                <Image 
                    src={second} 
                    style={{ 
                        width: '80%', 
                        borderRadius: "20px", 
                        height: 'auto' 
                    }} 
                    sizes="100vw" 
                    alt="A blue graph with a sharp peak, with green underneath"  
                /> 
            </div>
            <br />
            <br />
            <Summary /> 
            <br />  
            <br></br>
            <br></br>
            <SlawEx />
            <br></br>
            <br></br>
            <Quizheading />
            <br />
            <br /> 
            <Link href="/education/gp2" className={style.backtoLink}>Gen phys 2 &#10140;</Link>  
             <br />  
             <br />            
             <Helpful />
        </>
    );
}

export default Slaw;