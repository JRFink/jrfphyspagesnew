import Link from 'next/link';  
import Image from 'next/image'; 
import style from '@/styles/general.module.css'; 

const Original = () => { 
    return ( 
        <> 
            <br /> 
            <Link href="/education/hop1" className={style.backtoLink}>History of phys 1</Link> 
            <br /> 
            <br /> 
            <h1 className={style.centerText}> 
                Original papers in phys
            </h1> 
            <br /> 
            <p>
                <ul>
                    
                    <li>
                        <Link href="https://archive.org/details/newtonspmathema00newtrich/mode/2up">Newton&#39;s Principia</Link>.
                        <br /> 
                        1687
                    </li>
                    <br />
                </ul>
            </p>
        </> 
    ); 
} 

export default Original;