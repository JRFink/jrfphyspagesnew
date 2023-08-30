import { useState } from 'react';
import style from '@/styles/general.module.css';
// import LeaveaNote from '@/pages/components/contactComponents'; 
// import { Thankyou } from '@/pages/components/contactComponents';

const handleSubmit = async (note) => {

    console.log('note is t ' + note.target);
    note.preventDefault();
    const data = {
        noteData: note.target.messageText.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/messageForm'
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

function Messageform() {

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
                <textarea type="text" id="messageText" className={style.messageBox} placeholder=" General feedback"/>
                <br></br>
                <br></br>
                <button type="submit" className={style.greenButtonCont}>Submit</button>
            </form>
        </div>
      </>
    ) 
  }


export default function MessageFlow () {

  const [isSubmitted, setSubmitted] = useState(false);
    
    return (
        <>
            {
            isSubmitted ? (
              <p className={style.centerText}>Thank you. We will be in touch.</p>  
            ) : (
              <>
                <Messageform
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




