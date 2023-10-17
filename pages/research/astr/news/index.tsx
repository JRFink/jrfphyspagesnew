import Link from 'next/link';  
 import Image from 'next/image'; 
 import style from '@/styles/general.module.css'; 
  
 const News = () => { 
     return ( 
         <> 
             <br /> 
             <Link href="/research/astr" className={style.backtoLink}>Astrophysics</Link> 
             <br /> 
             <br /> 
             <h1 className={style.centerText}> 
                 Astrophysics news 
             </h1> 
             <br /> 
             <p>
                <ul>
                    <li>
                        <Link href="https://webbtelescope.org/contents/news-releases/2023/news-2023-141">
                            Webb and jets from a newborn star
                        </Link>      
                    </li>
                    <li>
                        Find some of the latest research <a href="https://journals.aps.org/prresearch/subjects/astrophysics">here</a>.
                    </li>
                </ul>
                
            </p>
  
         </> 
     ); 
 } 
  
 export default News;
