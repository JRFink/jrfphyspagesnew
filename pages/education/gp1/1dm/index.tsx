import Link from 'next/link';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import style from '@/styles/general.module.css';
import OnedmEx from '@/pages/exercises/gp1/1dmex';
import Helpful from '@/pages/components/helpful';



const Onedm = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Motion in 1 Dimension
            </h1>
            <br></br>
            <h2 className={style.h2SectionColor}>
                1. Motion in 1 dimension
            </h2>
            <h3>
                1.1 Position
            </h3>
            <h3>
                1.2 Velocity
            </h3>
            <br></br>
            <ConstantPosVid />
            <br></br>
            <br></br>
            <h3>
                1.3 Acceleration
            </h3>
            <AccelVid />
            <br></br>
            <h2 className={style.h2SectionColor}>
                2. Motion with constant acceleration
            </h2>
            <h3>
                2.1 Kinematic equations
            </h3>
            <br></br>
            <DeriveKinVid />
            <br></br>
            <h2 className={style.h2SectionColor}>
                3. Motion with non-constant acceleration
            </h2>
            <br></br>     
            <br></br>
            <OnedmEx />
            <br></br>
            <p className={style.centerText}>just testing</p>
            <div className={style.scroll}>
            </div>
            <div className={style.centerTesting}>
                <div id="keyboard">
                    <div id="first_row">
                        <td><input type="button" className={style.helpButton} value="+"/></td>
                        <td><input type="button" className={style.helpButton} value="-"/></td>
                        <td><input type="button" className={style.helpButton} value="×"/></td>
                        <td><input type="button" className={style.helpButton} value="÷"/></td>
                        <td><input type="button" className={style.helpButton} value="="/></td>
                        <td><input type="button" className={style.helpButton} value="≠"/></td>
                        <td><input type="button" className={style.helpButton} value="≈"/></td>
                        <td><input type="button" className={style.helpButton} value="<"/></td>
                        <td><input type="button" className={style.helpButton} value=">"/></td>
                        <td><input type="button" className={style.helpButton} value="&#8706;"/></td>
                        <td><input type="button" className={style.helpButton} value="&#8747;"/></td>
                        <td><input type="button" className={style.helpButton} value="&#8748;"/></td>
                        <td><input type="button" className={style.helpButton} value="&#8721;"/></td>
                        <td><input type="button" className={style.helpButton} value="π"/></td>
                        <td><input type="button" value="∆" className={style.helpButton}/></td>   
                    </div>
                </div>
                <br></br>
                <input type="text"/> &nbsp; 
                <input type="submit" value="Calculate" className={style.helpButton}/>
                <br></br>
                <br></br>
                <input type="text"/> &nbsp;    
                <input type="submit" value="Check answer" className={style.helpButton}/>
            </div>
            <Helpful />
        </>
    );
}

export default Onedm;