import Link from 'next/link';   
import Image from 'next/image';  
import style from '@/styles/general.module.css';  
  
  const Diss = () => {  
      return (  
          <>  
              <br />  
              <Link href="/research/bio" className={style.backtoLink}>Biophysics</Link>  
              <br />  
              <br />  
              <h1 className={style.centerText}>  
                  Biophysics dissertations  
              </h1>  
              <br />  
          </>  
      );  
  }  
  
  export default Diss;
