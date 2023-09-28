import Link from 'next/link';   
  import Image from 'next/image';  
  import style from '@/styles/general.module.css';  
  
  const Diss = () => {  
      return (  
          <>  
              <br />  
              <Link href="/research/qis" className={style.backtoLink}>Quantum info</Link>  
              <br />  
              <br />  
              <h1 className={style.centerText}>  
                  Quantum information dissertations  
              </h1>  
              <br />  
          </>  
      );  
  }  
  
  export default Diss;
