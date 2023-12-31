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
                     <Link href="https://www.aps.org/newsroom/pressreleases/nobel2023.cfm">
                      2023 Nobel prize
                     </Link>
                  </li>
                  <br />
<li>
<Link href="https://phys.org/news/2023-12-theory-einstein-gravity-quantum-mechanics.html">Gravity and quantum mechanics</Link>
</li>
<br />
               <li>
                     <Link href="https://pubs.aip.org/physicstoday">
                      Physics today
                     </Link>
                  </li>
                  <br />
                  <li>
                     <Link href="https://www.aps.org/publications/apsnews/202311/index.cfm">APS news</Link>
                  </li>
                  <br />
                  <li>
                     <Link href="https://webbtelescope.org/contents/news-releases/2023/news-2023-141">
                           Webb and jets from a newborn star
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
                        <Link href="https://investors.ionq.com/news/news-details/2023/IonQ-Announces-New-25.5M-Quantum-Deal-with-United-States-Air-Force-Research-Lab/default.aspx"                            >Ion Q receives &#36;25 million deal with Air force research lab</Link> 
                  </li>
                  <br />
               </ul>
          </p>
      </>
   );
}

export default News;
