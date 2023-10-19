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
                We&#39;ll go through the problems step-by-step; that way you can follow along and not just regurgitate.
                <br />
                <br />
                And what if it&#39;s 3 am and you can&#39;t go to office hours?
                <br />
            </p>
            <br />
            <Link href="/education/gp1/stuff/framekin" className={style.generalLink}>Frames &#10140; kinematics</Link>
            <br />
            <Link href="/education/gp1/stuff/newten" className={style.generalLink}>Newton &#10140; energy conservation</Link>
            <br />
            <Link href="/education/gp1/stuff/momgrav" className={style.generalLink}>Momentum &#10140; gravity</Link>
            <br />
            <Link href="/education/gp1/stuff/fluidtherm" className={style.generalLink}>Fluids &#10140; thermo</Link>
        </> 
    ); 
} 

export default Stuff;
