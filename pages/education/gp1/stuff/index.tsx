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
                This is going to be a giant database of gen phys 1 questions. 
                <br /> 
                <br />
                You will be able to go through questions rapidly,
                and the system will track your progress so you can focus on your weak areas. 
                <br />
                <br />
                You&#39;ll master the questions in no time. 
            </p>
            <br />
            <Link href="/education/gp1/stuff/framekin" className={style.generalLink}>Frames &#10140; kinematics</Link>
            <br />
            <Link href="" className={style.generalLink}>Newton &#10140; energy conservation</Link>
            <br />
            <Link href="" className={style.generalLink}>Momentum &#10140; gravity</Link>
            <br />
            <Link href="" className={style.generalLink}>Fluids &#10140; thermo</Link>
        </> 
    ); 
} 

export default Stuff;
