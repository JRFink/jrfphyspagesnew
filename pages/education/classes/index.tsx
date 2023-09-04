import style from '@/styles/general.module.css';
const Classes = () => { 

  return ( 
    <>
       <h1 className={style.centerText}>
           Classes
       </h1>
<Link href="/education/hop1" className={style.generalLink}>History of Physics 1</Link><br></br>
                <Link href="/education/hop2" className={style.generalLink}>History of Physics 2</Link><br></br>
                <Link href="/education/gp1" className={style.generalLink}>General Physics 1</Link><br></br>
                
</>

 ); 
}

export default Classes;
