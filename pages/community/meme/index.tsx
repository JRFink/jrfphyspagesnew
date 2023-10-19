import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/general.module.css';
import meme1 from '@/public/images/meme1.jpg';

const Meme = () => { 
  return (
    <>
      <br />
      <Link href="/community" className={style.backtoLink}>Community</Link>
      <br />
      <br />
      <h1 className={style.centerText}>
        Memes
     </h1>
     <br />
     <br />
      <p>
           Share funny memes.  
      </p>
      <br />
      <br />
      <br />
      <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={meme1}
                    style={{
                        width: '50%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
            <br />
            <br />
    </>
  );
}

export default Meme;
