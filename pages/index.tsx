import style from '../styles/general.module.css';
import Link from 'next/link';

const indexPage = () => {
  return (
    <>
      <p className={style.centerText}>
        Hello, and welcome to jrfink.net! This site focuses on physics education and research. <br></br> <br></br>
        Take a look around and explore. Above you will see four tabs, which will take you to the education, 
        research, sign up and sign-in tabs. There is also a search feature which we are implementing. <br></br> <br></br>

        You come to this site to learn about physics. <br></br>
        Eventually you will be able to take gen phys 1, a full-on implementation of a general physics 1 class. <br></br><br></br> 

        You are also able to learn about the current research topics within physics. For example, what&#39;s all the hype with quantum computing? 
        Learn about it <Link href="/research/qis">here</Link>. 
      </p>   
    </>
  );
}

export default indexPage;
