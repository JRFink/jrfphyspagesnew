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
                This page is all about connecting with others in physics. For example, if you&#39;re taking a physics class here and need help, you can post a question. 
            <br />
            <br /> 
            Or if you just want to post funny memes, you can do that too. 
                </p>
            <div className={style.flexContainer}>
            <Link href="/community/post" className={style.generalLink}>Post a question</Link>
            <br />
            <Link href="/community/connect" className={style.generalLink}>Connect</Link>
            <br />
            <Link href="/community/meme" className={style.generalLink}>Memes</Link>
            </div>
            <br />
        </>
    );
}

export default Comm;
