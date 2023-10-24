import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const News = () => {
    return (
        <>
            <br />
            <Link href="/research/nuc" className={style.backtoLink}>Nuclear</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                News
            </h1>
            <br />
            <p>
                You can find some of the latest research <a href="https://journals.aps.org/prc/">here</a>.  
            </p>
<p>
     <ul> 
         <li><Link href="https://www.ans.org/">American nuclear society</Link></li>
 </ul>
</p>
           
        </>
    );
}

export default News;
