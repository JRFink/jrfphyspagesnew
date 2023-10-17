import Link from 'next/link';   
import Image from 'next/image';  
import style from '@/styles/general.module.css';  
  
  const Data = () => {  
      return (  
          <>  
              <br />  
              <Link href="/research/geo" className={style.backtoLink}>Geophysics</Link>  
              <br />  
              <br />  
              <h1 className={style.centerText}>  
                  Geophysics data
              </h1>  
              <br />  
          </>  
      );  
  }  
  
  export default Data;