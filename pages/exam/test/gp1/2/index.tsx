import Link from 'next/link';
import style from '@/styles/general.module.css';

const Test2 = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 2</h1>
            <p>
                Test 2 will cover the following topics:
                <ol>
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

export default Test2;