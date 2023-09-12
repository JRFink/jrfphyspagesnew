import { useState } from 'react';
import style from '@/styles/general.module.css';
import ConstantPosVid from '@/public/videos/gp1/constantpos';

const Sorry = () => { 

return (
 
    <> 
      <p className={style.centerText}>
         Sorry, incorrect number. Try again.
      </p>
    </> 
);} 

const handleSubmit = async (e: any, setNumberCorrect: any) => {

  e.preventDefault();

  if (e.target.input.value === process.env.NEXT_PUBLIC_ACCESS_CODE) {
    setNumberCorrect(true);
  }
  else {
    setNumberCorrect(false);
  }
}

const Member = () => { 

const [numberCorrect, setNumberCorrect] = useState(false);
 
 return ( 
  <>
    <h1 className={style.centerText}>
      Members 
    </h1> 
    <p className={style.centerText}>
      Welcome to the members page!
    <br /> 
    <br />
      Follow the link <a href="https://buy.stripe.com/7sI2bHdDmaKB2qI9AH">here</a>, and once payment is confirmed I&#39;ll send you a code for one of the videos through email. 
    </p>
    <br /> 
    <p className={style.centerText}> 
      Access code:
    <br />
    </p>
    <div className={style.centerText}>
      <form onSubmit={(e) => handleSubmit(e, setNumberCorrect)}>
        <input type='text' id='input'></input>
        <button type='submit' className={style.greenButtonCont}>Submit</button>
      </form>
    </div>
    { 
      numberCorrect ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <ConstantPosVid />
          <br />
          <br />
        </>
      ) : (
        <>
        </>
      )
    }
  </>
  );
} 

export default Member;
