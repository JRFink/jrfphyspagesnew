import Link from 'next/link';
import style from '@/styles/general.module.css';

const News = () => { 
   return (
      <>
         <br />
         <Link href="/research" className={style.backtoLink}>Research</Link>
         <br />
         <br />
         <h1 className={style.centerText}>
             News
         </h1>
          <p>
               Current news in physics..
          </p>
      </>
   );
}

export default News;
