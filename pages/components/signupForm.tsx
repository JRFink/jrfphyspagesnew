const SignupForm = () => { 

  return (
    <>
                <br /> 
             <p className={style.centerText}> 
                 Be among the first to know when we launch 
             </p> 
             <div className={style.formDiv}> 
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
                         <button type="submit" className={style.greenButton}>Sign Up</button> 
                     </div> 
                 </form> 
             </div>
    </>
  );
}

export default SignupForm;
