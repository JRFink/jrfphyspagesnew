import Link from 'next/link';
import style from '@/styles/general.module.css';
const Classes = () => { 

  return ( 
    <>
        <br />
        <Link href="/education" className={style.backtoLink}>Education</Link>
       <h1 className={style.centerText}>
           Classes
       </h1>
          
          <br />
          <br />
          <Link href="/education/gp1" className={style.generalLink}>General Physics 1</Link><br></br>
                
    </>
  ); 
}

export default Classes;
