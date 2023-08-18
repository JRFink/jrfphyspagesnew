import style from '../styles/general.module.css';
import Link from 'next/link';
import Image from 'next/image';
import nabla from '@/public/images/nabla.svg';

const indexPage = () => {
  return (
    <>
      <p className={style.centerText}>
        Hello, and welcome to jrfink.net! This site focuses on physics education and research.
      </p>
      <br></br>
      <p>
        Take a look around and explore. Above you will see a few tabs, which will take you to the education, 
        research, sign up and sign-in tabs. There is also a search feature. Working on that. <br></br> <br></br>

        You come to this site to learn about physics. Eventually you will be able to take gen phys 1, 
        a full-on implementation of a gen phys 1 class. 
        <br></br><br></br> 
        You are also able to learn about the current research topics within physics. For example, what&#39;s all the hype with quantum computing? 
        Learn about it <Link href="/research/qis">here</Link>. 
        <br></br><br></br>
        You can learn about the different physics research areas and what schools and institutes are strong in each area. 
        For example, my alma mater <Link href="https://www.colorado.edu/physics/">CU</Link> is one of the best places for &#34;AMO&#34; research, 
        which studies how light interacts with matter.
      </p> 
      <div 
                style={{
                    display: "flex",
                    justifyContent: "left",
                }}
            >
                <Image
                    src={nabla}
                    style={{
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The black gradient symbol" 
                />
            </div>  
    </>
  );
}

export default indexPage;
