import style from '@/styles/general.module.css';

const LoginForm = () => {
    
    return (
        <>
            <br></br>
            <p className={style.centerText}>
                just testing rn
            </p>
            <br /> 
            <br />
            <div className={style.formDivL}>
                <form className={style.formClass}> 
                    <h2 className={style.formHeader}> 
                        Login 
                    </h2> 
                    <div className={style.inputDiv}>
                        <input name="email" id="email" type="text" className={style.inputBox} placeholder="email" required></input>
                        <label className={style.labelBox}><b>Email: </b></label>
                    </div>
                    <div className={style.inputDiv}>
                        <input name="password" id="password" type="password" className={style.inputBox} placeholder="&#x2A;&#x2A;&#x2A;&#x2A;nottooeasy&#x2A;&#x2A;&#x2A;&#x2A;" required></input>
                        <label className={style.labelBox}><b>Password: </b></label>
                    </div>
                    <div className={style.centerText}>
                        <button type="submit" className={style.greenButtonAuth}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;