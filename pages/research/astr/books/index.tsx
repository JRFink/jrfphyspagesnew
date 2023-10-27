import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Books = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Books for astrophysics
            </h1> 
            <br /> 
            <p>
                <ul>
                    <li>
                        <Link href="https://a.co/d/feMYMvd">Astrophysics in a nutshell</Link> by Dan Maoz
                    </li>
                    <p>
                        I actually learned from this book &#58;&#41;
                    </p>
                </ul>
            </p>
            
        </> 
    ); 
} 
  
 export default Books;