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
                Find some of the latest research <a href="https://journals.aps.org/prresearch/subjects/astrophysics">here</a>.
            </p>
  
         </> 
     ); 
 } 
  
 export default News;
