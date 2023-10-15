import Link from 'next/link';
import style from '@/styles/general.module.css';

const Post = () => { 
  return (
    <>
     <h1 className={style.centerText}>
        Posts 
     </h1>
      <p>
           Post your questions or thoughts about physics!   
      </p>
    </>
  );
}

export defualt Post;
