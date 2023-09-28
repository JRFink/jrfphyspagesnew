import Link from 'next/link';   
  import Image from 'next/image';  
  import style from '@/styles/general.module.css';  
  
  const Diss = () => {  
      return (  
          <>  
              <br />  
              <Link href="/research/cm" className={style.backtoLink}>Condensed matter</Link>  
              <br />  
              <br />  
              <h1 className={style.centerText}>  
                  Condensed matter dissertations  
              </h1>  
              <br />  
          </>  
      );  
  }  
  
  export default Diss;
