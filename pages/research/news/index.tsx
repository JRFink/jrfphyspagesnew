import Link from 'next/link';
import style from '@/styles/general.module.css';

const News = () => { 
   return (
      <>
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
