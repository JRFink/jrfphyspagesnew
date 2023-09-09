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

); 

} 

const handleSubmit = (e: any, setNumberCorrect: any) => {
  e.preventDefault();
  console.log('e is ' + e.target.input.value);
  const inputData = e.target.input.value;
  if (inputData == '8523164') {
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
      Follow the link <a href="https://buy.stripe.com/7sI2bHdDmaKB2qI9AH">here</a> and once payment is confired I&#39;ll send you the code through secure email.
    </p>
    <br />
    <div className={style.centerText}>
      <form onSubmit={(e) => handleSubmit(e, setNumberCorrect)}>
        <input type='text' id='input'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
    { 
      numberCorrect ? (
        <ConstantPosVid />
      ) : (
        <>
        </>
      )
    }
  </>
  );
} 

export default Member;
