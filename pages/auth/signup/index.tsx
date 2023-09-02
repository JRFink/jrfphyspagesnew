import { useState } from 'react';
import Link from 'next/link';
import style from '@/styles/general.module.css';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_SKTEST);

const SignupFlow = () => { 

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async ( event: any ) => {

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
        const endpoint = '/api/signupForm'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSONdata,
        }     
        const customer = await stripe.customers.create({
            name: event.target.firstnamea.value + ' ' + event.target.lastnameb.value,
            email: event.target.emaila.value, 
            phone: event.target.phoneb.value
        });

        setSubmitted(true);
        await fetch(endpoint, options);

        
    }

    const SignupCard = () => {
        return (
            <>
                <div className={style.formDivS}> 
                    <form onSubmit={handleSubmit} className={style.formClass}> 
                        <h2 className={style.formHeader}> 
                            Sign up 
                        </h2> 
                        <br />
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
                        <div className={style.centerText}> 
                            <p>By signing up you agree to our <Link href="/legal/terms">Terms</Link> and <Link href="/legal/privacy">Privacy Policy</Link></p> 
                            <br></br> 
                            <button type="submit" className={style.greenButtonAuth}>Sign up</button> 
                        </div> 
                    </form> 
                </div>
            </>
        );
    }

  return (
    <>
            <br /> 
            <p className={style.centerText}> 
                Be among the first to know when we launch 
            </p> 
            <br />
            <br />
            {
                submitted ? (
                    <>
                        <p className={style.centerText}>Thank you. We will be in touch.</p>
                        <br />
                        <p className={style.centerText}>Back to <Link href="/">the physics</Link>.</p>
                    </>
                ) : (
                    <SignupCard />
                )
            }
            <br />
            <br />
            <br />
            <br /> 
            <br />
    </>
  );
}

export default SignupFlow;