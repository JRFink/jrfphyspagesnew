import Link from 'next/link';
import style from '@/styles/general.module.css';

const Post = () => { 
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
           Post your questions or thoughts about physics!   
      </p>
    </>
  );
}

export default Post;
