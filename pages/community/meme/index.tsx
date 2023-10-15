import Link from 'next/link';
import style from '@/styles/general.module.css';

const Meme = () => { 
  return (
    <>
      <br />
      <Link href="/community" className={style.backtoLink}>Community</Link>
      <br />
      <br />
      <h1 className={style.centerText}>
        Posts 
     </h1>
      <p>
           Share funny memes.  
      </p>
    </>
  );
}

export defualt Meme;
