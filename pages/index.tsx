import style from '../styles/general.module.css';

const indexPage = () => {
  return (
    <>
      <p className={style.centerText}>
        Hello, and welcome to jrfink.net! This site focuses on physics education and research. <br></br> <br></br>
        Take a look around and explore. Above you will see four tabs, which will take you to the education, 
        research, sign up and sign-in tabs. There is also a search feature which we are implementing. <br></br> <br></br>

        You come to this site to learn about physics. <br></br>
        Eventually you will be able to take gen phys 1, a full-on implementation of a general physics 1 class. <br></br><br></br> 

        Also, you are able to learn about the current research topics within physics.
      </p>   
    </>
  );
}

export default indexPage;
