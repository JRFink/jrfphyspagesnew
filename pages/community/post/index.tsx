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
           Post your questions about physics!   
      </p>
      <br />
      <br />
      <ol>
        <li>
          A question I have - what is the connection between the gravitational and the electric force?
        </li>
      </ol>
    </>
  );
}

export default Post;
