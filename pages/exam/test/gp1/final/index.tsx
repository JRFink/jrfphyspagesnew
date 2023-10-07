import Link from 'next/link';
import style from '@/styles/general.module.css';

  const FinalSignup = () => {  
          return (  
              <>  
                  <div className={style.formDivS}>   
                      <form className={style.formClass}>   
                          <h2 className={style.formHeader}>   
                              Register   
                          </h2>   
                          <br />  
                          <div className={style.inputDiv}>   
                              <input name="firstnamea" id="firstnameb" type="text" className={style.inputBox} placeholder="first name" required></input>   
                              <label className={style.labelBox}><b>First name: </b></label>   
                          </div>   
                          <div className={style.inputDiv}>    
                              <input name="lastnamea" id="lastnameb" type="text"  className={style.inputBox} placeholder="last name" required></input>   
                              <label className={style.labelBox}><b>Last name: </b></label>   
                          </div>   
                          <div className={style.inputDiv}>          
                              <input name="acctid" id="" type="text" className={style.inputBox} placeholder="00-000-000-000" required></input>   
                              <label className={style.labelBox}><b>Acct id: </b></label>   
                          </div>   
                          <div className={style.inputDiv}>      
                              <input name="date" id="" type="text" className={style.inputBox} placeholder="12-10-2023" required></input>   
                              <label className={style.labelBox}><b>Date of exam </b></label>      
                          </div>   
                          <br></br>             
                          <div className={style.centerText}>   
                              <p> 
 By registering you agree to the academic honesty policy.   
 </p> 
                              <br></br>   
                              <button type="submit" className={style.greenButtonAuth}>Register</button>   
                          </div>   
                      </form>   
                  </div>  
              </>  
          );  
      }


const Final = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Final exam</h1>
            <p>
                The final exam will cover the following topics:
                <ol>
                    <li>
                        Frames, units, measurement
                    </li>
                    <li>
                        Vectors
                    </li>
                    <li>
                        Applications of calc
                    </li>
                    <li>
                        Motion in 1, 2, and 3 dimensions
                    </li>
                    <li>
                        Simple differential equations
                    </li>
                    <li>
                        Newton&#39;s first, second, and third law
                    </li>
                    <li>
                        Applications of Newton&#39;s laws
                    </li>
                    <li>
                        Work and kinetic energy
                    </li>
                    <li>
                        Potential energy and energy conservation
                    </li>
                    <li>
                        Momentum, impulse, and collisions
                    </li>
                    <li>
                        Rotational motion
                    </li>
                    <li>
                        Dynamics of rotational motion
                    </li>
                    <li>
                        Equilibrium
                    </li>
                    <li>
                        Taylor expansions
                    </li>
                    <li>
                        Gravity
                    </li>
                    <li>
                        Fluids
                    </li>
                    <li>
                        Oscillations
                    </li>
                    <li>
                        Wave motion
                    </li>
                    <li>
                        Temperature and heat
                    </li>
                    <li>
                        Gases
                    </li>
                    <li>
                        First two laws of thermodynamics
                    </li>
                </ol>
            </p>
     <br /> 
<p>
Register for final exam here...
</p>
<br />
<br />
<FinalSignup />
<br />
<br />
      <p className={style.centerText}>   
        Test code:  
      </p> 
      <div className={style.centerText}>  
        <form>  
          <input type='text' id='input'></input>  
          <button type='submit' className={style.greenButtonCont}>Submit</button>  
        </form>  
      </div>
<br />
        </>
    );
}

export default Final;