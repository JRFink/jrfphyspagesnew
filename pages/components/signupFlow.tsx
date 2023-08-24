import { useState } from 'react';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const SignupFlow = () => { 

    const [notActivated, setActivated] = useState(true); 
    const [typing, setTyping] = useState(false); 
    const [textButNotSubmitted, setTextButNotSubmitted] = useState(false); 

    const [submitted, setSubmitted] = useState(false);

    console.log('here is ' + submitted);
    if (submitted) {
        return (
            <>
                <p className={style.centerVandH}>
                    Thank you! We will be in touch.
                </p>
            </>
        );
    }

    const handleSubmit = async ( event: any ) => {

        console.log('again ' + submitted);

        event.preventDefault() 
        const data = {
            firstname: event.target.firstnamea.value, /* I'm confused as to what actually defines firstname */
            lastname: event.target.lastnameb.value, /* believe first and last are the sql names */
            email: event.target.emaila.value, /* so either a and b will work? emaila or emailb ? */
            phone: event.target.phoneb.value,
            // hashPW: event.target.passworda.value,
            // hashPWRepeat: event.target.passwordrepeatb.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSONdata,
        }
        // console.log("1 " + fetch); 
        // console.log("2 " + typeof(fetch));  
        // console.log("3 " + fetch(endpoint, options)); 
        // console.log("4 " + typeof(fetch(endpoint, options)));       
        // await fetch(endpoint, options);
        setSubmitted(true);
        window.location.reload();
        console.log(submitted);
        console.log('state is' + submitted);
    }

    // <SignupForm 
    //     onShow={() => setActiveIndex(0)}/> 

    // <ThankyouMessage 
    //     onShow={() => setActiveIndex(1)} />

  return (
    <>
            <br /> 
            <p className={style.centerText}> 
                Be among the first to know when we launch 
            </p> 
            <br />
            <br />
            <div className={style.formDivS}> 
                <form onSubmit={handleSubmit} className={style.formClass}> 
                    <h2 className={style.formHeader}> 
                        Sign up 
                    </h2> 
                    <div className={style.inputDiv}> 
                        <input name="firstnamea" id="firstnameb" type="text" className={style.inputBox} placeholder="first name" required></input> 
                        <label className={style.labelBox}><b>First name: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>  
                        <input name="lastnamea" id="lastnameb" type="text"  className={style.inputBox} placeholder="last name" required></input> 
                        <label className={style.labelBox}><b>Last name: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>        
                        <input name="emaila" id="emailb" type="text" className={style.inputBox} placeholder="email no junk" required></input> 
                        <label className={style.labelBox}><b>Email: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>    
                        <input name="phonea" id="phoneb" type="tel" className={style.inputBox} placeholder="303-867-5309" required></input> 
                        <label className={style.labelBox}><b>Phone: </b></label>    
                    </div> 
                    <br></br> 
                    {/* <br></br> 
                    <label><b>Password: </b></label> 
                    <input name="passworda" id="passwordb" type="password" className={style.inputBox} placeholder="*********" required> 
                    </input> 
                    <br></br> 
                    <br></br> 
                    <label><b>Repeat password: </b></label> 
                    <input name="passwordrepeata" id="passwordrepeatb" type="password" className={style.inputBox} placeholder="repeat&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;&#x2A;"  required> 
                    </input> */} 
                    <br></br> 
                    <div className={style.centerText}> 
                        <p>By signing up you agree to our <Link href="/legal/terms">Terms</Link> and <Link href="/legal/privacy">Privacy Policy</Link></p> 
                        <br></br> 
                        <button type="submit" className={style.greenButtonAuth}>Sign Up</button> 
                    </div> 
                </form> 
            </div>
            <br />
            <br />
            <br />
            <br /> 
            <br />
    </>
  );
}

export default SignupFlow;
