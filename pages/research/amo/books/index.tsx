import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Books = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/amo" className={style.backtoLink}>AMO</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Books for AMO 
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="https://www.amazon.com/Atomic-Physics-8th-Dover-Books/dp/0486659844">Atomic Physics</Link> by Max Born
                    </li>
                    <br />
                    <li>
                        <Link href="https://www.amazon.com/dp/3319838180">Theoretical Atomic Physics</Link> by Harald Friedrich
                    </li>
                </ul>
            </p>
            
        </> 
    ); 
} 
  
 export default Books;