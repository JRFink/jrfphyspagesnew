import { useState } from 'react';
import style from '@/styles/general.module.css';
// import LeaveaNote from '@/pages/components/contactComponents'; 
// import { Thankyou } from '@/pages/components/contactComponents';

const handleSubmit = async (note) => {
    console.log('note is ' + note);
    // note.preventDefault();
    const data = {
        noteData: note.target.feedbackText.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/contactForm'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      }, 
      body: JSONdata,
    }
    await fetch(endpoint, options);
    console.log('it worked again');
}

function Contactform({ submitted }) {

    return (
      <>
        <h1 className={style.centerText}>
                Contact
        </h1>
        <div className={style.centerIfSmall}>
            <p>
                Leave a note
            </p>
            <form onSubmit={handleSubmit}>
                <textarea type="text" id="feedbackText" className={style.feedbackBox} placeholder=" General feedback"/>
                <br></br>
                <br></br>
                {/* <input type="text">another button</input> */}
                {/* <input name="email" id="email" onClick={onShow} type="submit" placeholder="email" required></input> */}
                <button type="submit" className={style.greenButtonCont}>Submit</button>
            </form>
        </div>
      </>
    ) 
  }


export default function ContactFlow () {

  const [isSubmitted, setSubmitted] = useState(false);
    
    return (
        <>
            {
            isSubmitted ? (
              <p className={style.centerText}>Thank you. We will be in touch.</p>  
            ) : (
              <>
                <Contactform
                  isSubmitted={false}
                  onShow={() => setSubmitted(true)} 
                  />     
              </>
            )
          }
          <br></br>
          <br></br>
          <p>
              Or write to us at: 
              <br></br>
              <br></br>
              &nbsp;    P.O. Box 7007 <br></br>
              &nbsp;          Ny, Ny 10150
          </p>
        </>
    );
}

/*

click submit button 
submit form data 
dont refresh the page, not sure why? 
show the thank you message 
*/


