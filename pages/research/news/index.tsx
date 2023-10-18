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
            <br />
               <ul>
<li>
                     <Link href="https://pubs.aip.org/physicstoday">
                      Physics today
                     </Link>
                  </li>
                  <br />
                  <li>
                     <Link href="https://stealthoptional.com/news/chinas-zuchongzhi-quantum-computer-is-the-most-powerful-in-the-world/">
                        China beats Google&#39;s quantum computer
                     </Link>
                  </li>
                  <br />
                  <li>
                     <Link href="https://webbtelescope.org/contents/news-releases/2023/news-2023-141">
                           Webb and jets from a newborn star
                     </Link>      
                  </li>
                  <br />
                  <li>
                     <Link href="https://www.aps.org/publications/apsnews/202311/index.cfm">APS news</Link>
                  </li>
                  <br />
               </ul>
          </p>
      </>
   );
}

export default News;
