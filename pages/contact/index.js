import { useState } from 'react';
import style from '@/styles/general.module.css';
// import LeaveaNote from '@/pages/components/contactComponents'; 
// import { Thankyou } from '@/pages/components/contactComponents';

function Contactform() {

    const handleSubmit = async (note) => {
        note.preventDefault();
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
    }

    return (
      <>
        <h1 className={style.centerText}>
                Contact
        </h1>
        <div className={style.centerIfSmall}>
            <p>
                testing
            </p>
            <form onSubmit={handleSubmit}>
                <textarea type="text" id="feedbackText" className={style.feedbackBox} placeholder=" General feedback"/>
                <br></br>
                <br></br>
                {/* <button type="submit" className={style.greenButtonCont}>green submit to db</button> */}
            </form>
        </div>
      </>
    ) 
  }
  
  function Thankyou() {
    return (
      <>
        <p>Thank you. A real human will read this.</p>
      </>
    )
  }

function LeaveaNote({
    isActive, 
    onShow
  }) {
    return (
      <>
        {
          isActive ? (
            <>
              <Contactform />
              <button onClick={onShow} className={style.greenButtonCont}>
                Submit
              </button>      
            </>
          ) : (
            <Thankyou />
          )
        }
      </>
    );
  }

export default function ContactFlow () {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <LeaveaNote 
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(1)} 
            >
            </LeaveaNote>
        </>
    );
}


