import style from '@/styles/general.module.css';

const Contact = () => {

    const handleSubmit = async (note) => {

        const JSONdata = JSON.stringify(note)

        const endpoint = '/api/apiform'
      
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
            <p>
                Leave a note
            </p>
            <form onSubmit={handleSubmit}>
                <textarea type="text" id="feedbackText" className={style.feedbackBox} placeholder=" General feedback"/>
                <br></br>
                <br></br>
                <button type="submit" className={style.greenButton}>Submit</button>
            </form>
        </>
    );
}

export default Contact;