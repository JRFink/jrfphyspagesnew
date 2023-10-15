import Link from 'next/link';
import style from '@/styles/general.module.css';

const Comm = () => { 
    return (
        <>
      <h1 className={style.centerText}>
          Community
      </h1>
      <p>
         Hello, and welcome to the physics community! 
      </p>
      <p>
           This page is all about connecting with others in physics. For example, if you&#39;re taking a physics class here and need help, you can post a question here. 
<br /> 
<br />
If you work in a specific area of physics and want to connect with others in that area, find them here. 
<br /> 
<br /> 
Or if you just want to post funny memes, you can do that too. 
      </p>

<Link href="/community/post" className={style.generalLink}>Post a question</Link>
<br />
<Link href="/community/connect" className={style.generalLink}>Connect</Link>
<br />
<Link href="/community/meme" className={style.generalLink}>Memes</Link>
<br />
        </>
    );
}

export default Comm;
