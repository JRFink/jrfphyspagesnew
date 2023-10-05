import Link from 'next/link';
import style from '@/styles/general.module.css';

const Test4 = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 4</h1>
            <p>
                Test 4 will cover the following topics:
                <ol>
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
      <p className={style.centerText}>   
        Test code:  
      </p> 
      <div className={style.centerText}>  
        <form>  
          <input type='text' id='input'></input>  
          <button type='submit' className={style.greenButtonCont}>Submit</button>  
        </form>  
      </div>
        </>
    );
}

export default Test4;