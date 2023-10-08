import Link from 'next/link';
import style from '@/styles/general.module.css';


export default function FinalExamSign () {
    return (
        <>
            <div className={style.formDivS}> 
                <form className={style.formClass}> 
                    <h2 className={style.formHeader}> 
                        Register for final
                    </h2> 
                    <br />
                    <div className={style.inputDiv}> 
                        <input name="firstnamea" id="firstnameb" type="text" className={style.inputBox} required></input> 
                        <label className={style.labelBox}><b>First name: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>  
                        <input name="lastnamea" id="lastnameb" type="text"  className={style.inputBox} required></input> 
                        <label className={style.labelBox}><b>Last name: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>        
                        <input name="emaila" id="emailb" type="text" className={style.inputBox} required></input> 
                        <label className={style.labelBox}><b>Student id: </b></label> 
                    </div> 
                    <div className={style.inputDiv}>    
                        <input name="phonea" id="phoneb" type="tel" className={style.inputBox} required></input> 
                        <label className={style.labelBox}><b>Date of exam: </b></label>    
                    </div> 
                    <br></br>           
                    <div className={style.centerText}> 
                        <p>
                            By registering for the final, 
                            you agree to the <Link href="/education/gp1/syll#honesty">academic honesty policy</Link>.
                        </p>
                        <br></br> 
                        <button type="submit" className={style.greenButtonAuth}>Register</button> 
                    </div> 
                </form> 
            </div>
        </>
    );
}