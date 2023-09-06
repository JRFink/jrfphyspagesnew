import { useState } from 'react';
import style from '@/styles/general.module.css';

const handleSubmit = async (note, setSubmitted) => {

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
  await fetch(endpoint, options)
    .then(setSubmitted(true));
}

function Messageform({setSubmitted}) {

  return (
    <>
      <h1 className={style.centerText}>
              Contact
      </h1>
         <form onSubmit={(note) => handleSubmit(note, setSubmitted)}>
             <textarea type="text" id="messageText" className={style.messageBox} placeholder=" General feedback"/>
             <br></br>
             <button type="submit" className={style.greenButtonCont}>Submit</button>
         </form>
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
                setSubmitted={setSubmitted}
              />     
            </>
          )
        }
      </>
  );
}

// export default function MessageFlow () {

//   const [isSubmitted, setSubmitted] = useState(false);

//   const handleSubmit = async (note) => {

//     note.preventDefault();
//     const data = {
//         noteData: note.target.messageText.value
//     }
//     const JSONdata = JSON.stringify(data)
//     const endpoint = '/api/contactForm'
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', 
//       }, 
//       body: JSONdata,
//     }
//     setSubmitted(true);
//     await fetch(endpoint, options);
//   }

//   const MessageForm = () => {
//     return (
//       <>
//         <h1 className={style.centerText}>
//           Contact
//         </h1>
//         <div className={style.centerInADiv}>
//           <p>
//             Leave a note
//           </p>
//           <form onSubmit={handleSubmit}>
//             <textarea type="text" id="messageText" className={style.messageBox} placeholder=" General feedback"/>
//             <br></br>
//             <br></br>
//             <button type="submit" className={style.greenButtonCont}>Submit</button>
//           </form>
//         </div>
//       </>
//     )
//   }
    
//   return (
//     <>
//         {
//         isSubmitted ? (
//           <p className={style.centerText}>Thank you. A real human will read this.</p>  
//         ) : (
//           <>
//             <MessageForm />
//           </>
//         )
//       }
//       <br></br>
//       <br></br>
//       <p>
//         Or write to us at: 
//         <br></br>
//         <br></br>
//         &nbsp;    P.O. Box 7007 <br></br>
//         &nbsp;          Ny, Ny 10150
//       </p>
//     </>
//   );
// }




