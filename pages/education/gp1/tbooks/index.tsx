import Link from 'next/link' 
import style from '@/styles/general.module.css'; 

 const Tbooks = () => { 
     return ( 
        <> 
        <br /> 
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
         <h1 className={style.centerText}> 
             Textbooks 
         </h1> 
         <p>
            Here are some popular textbooks for gen phys 1:
         </p>
         <p>
            <ul>
                <li>
                    <em>Fundamentals of Physics 10th edition</em> by <em>Haliday and Resnick</em> Wiley &#38; Sons &#169;
                </li>
                <li>
                    <em>Essential University Physics, Volume 1, 4th edition</em> by <em>Richard Wolfson</em> Pearson &#169;
                </li>
            </ul>
         </p>
        </>  
     ); 
 } 

 export default Tbooks; 
