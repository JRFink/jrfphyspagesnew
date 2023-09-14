import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import pendulum from '@/public/images/pendulum.svg';
import { ModoverviewTaylor } from '@/pages/components/modoverview';
import TaylorVid from '@/public/videos/gp1/taylor';
import TaylorEx from '@/pages/exercises/gp1/taylorex';
import OnedmQz from '@/pages/exam/quiz/gp1/1dmqz';
import Helpful from '@/pages/components/helpful';


const Taylor = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Taylor Expansion
            </h1>
            <br></br>
            <ModoverviewTaylor />
            <br></br>
            <TaylorVid />
            <br></br>
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
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
            <br></br>
            <br></br>
            <TaylorEx />
            <br></br>
            <br></br>
            <OnedmQz />
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