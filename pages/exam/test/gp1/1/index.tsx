import Link from 'next/link';
import style from '@/styles/general.module.css';

{ /*
const handleSubmit = async (e: any, setNumberCorrect: any) => { 
  
   e.preventDefault(); 
  
   if (e.target.input.value === process.env.NEXT_PUBLIC_ACCESS_CODE) { 
     setNumberCorrect(true); 
   } 
   else { 
     setNumberCorrect(false); 
   } 
 }
*/}

const Test1 = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <br></br>
            <h1 className={style.centerText}>Test 1</h1>
            <p>
                Test 1 will cover the following topics:
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

export default Test1;