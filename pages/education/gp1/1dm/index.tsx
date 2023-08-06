import Link from 'next/link';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
import AccelVid from '@/public/videos/gp1/accelvid';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import style from '@/styles/general.module.css';
import Summary from '@/pages/components/summary';
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
            <h2 className={style.h2SectionColor}>
                1. Position, displacement
            </h2>
            <br></br>
            <ConstantPosVid />
            <br></br>
            <h3>
                1.1 Definitions
            </h3>
            <h3>
                1.2 Examples
            </h3>
            <h2 className={style.h2SectionColor}>
                2. Velocity
            </h2>
            <h3>
                2.1 Average and instantaneous
            </h3>
            <h2 className={style.h2SectionColor}>
                3. Speed
            </h2>
            <h3>
                3.1 Average and instantaneous
            </h3>
            <h2 className={style.h2SectionColor}>
                4. Acceleration
            </h2>
            <br></br>
            <AccelVid />
            <br></br>
            <h3>
                4.1 Average and instantaneous
            </h3>
            <h3>
                4.2 Motion with constant a
            </h3>
            <br></br>
            <DeriveKinVid />
            <br></br>
            <h3>
                4.3 Motion with non-constant a
            </h3>
            <h2 className={style.h2SectionColor}>
                5. Calculus examples
            </h2>
            <h3>
                5.1 Graphs
            </h3>
            <h2 className={style.h2SectionColor}>
                6. Free-falling bodies don&#39;t have constant a
            </h2>  
            <h3>
                6.1 Approximations
            </h3>  
            <Summary />
            <br></br>
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