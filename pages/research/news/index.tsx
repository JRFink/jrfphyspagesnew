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
               <ul>
                  <li><Link href="https://www.aps.org/publications/apsnews/202311/index.cfm">APS news</Link></li>
               </ul>
          </p>
      </>
   );
}

export default News;
