import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
  
const Stuff = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
            <br /> 
            <h1 className={style.centerText}> 
                Question database
            </h1>
            <br /> 
            <p>
                This is going to be a giant database of hw problems.
                <br /> 
                <br />
                It will host the most common gen phys 1 problems, as well as the more obscure. 
                We&#39;ll go through each of the problems step-by-step.
                <br />
                <br />
                Also, what if it&#39;s 3 am, and you can&#39;t go to office hours? 
                <br />
                <br />
                Instead, you can come here, and watch a 
                hw problem video as much as you like. 
                <br />
            </p>
            <br />
            <Link href="/education/gp1/qdatabase/halliday" className={style.generalLink}><em>Fundamentals of Physics</em> Halliday &#38; Resnick <em>10th ed.</em> &#169; </Link>
            <br />
            <Link href="/education/gp1/qdatabase/framekin" className={style.generalLink}>Frames &#10140; kinematics</Link>
            <br />
            <Link href="/education/gp1/qdatabase/newten" className={style.generalLink}>Newton &#10140; energy conservation</Link>
            <br />
            <Link href="/education/gp1/qdatabase/momgrav" className={style.generalLink}>Momentum &#10140; gravity</Link>
            <br />
            <Link href="/education/gp1/qdatabase/fluidtherm" className={style.generalLink}>Fluids &#10140; thermo</Link>
        </> 
    ); 
} 

export default Stuff;
