import style from '@/styles/general.module.css';

const Login = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Login
            </h1>
            <br></br>
            <p className={style.centerText}>
                just testing rn
            </p>
            <br></br>
            <div className={style.formDiv}>
                <form className={style.formClass}> 
                    <div className={style.inputDiv}>
                        <input name="email" id="email" type="text" className={style.inputBox} placeholder="email" required></input>
                        <label className={style.labelBox}><b>Email: </b></label>
                    </div>
                    <div className={style.inputDiv}>
                        <input name="password" id="password" type="password" className={style.inputBox} placeholder="&#x2A;&#x2A;&#x2A;&#x2A;nottooeasy&#x2A;&#x2A;&#x2A;&#x2A;" required></input>
                        <label className={style.labelBox}><b>Password: </b></label>
                    </div>
                    <button type="submit" className={style.greenButton}>Login</button>
                </form>
            </div>
        </>
    );
}

export default Login; 