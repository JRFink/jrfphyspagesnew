import Link from 'next/link';
import style from '@/styles/general.module.css';
import JlsEx from '@/pages/exercises/qm1/jlsex';
import Helpful from '@/pages/components/helpful';

const Jls = () => {
    return (
        <>
            <Link href="/education/qm1" className={style.backtoLink}>Quantum 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Angular momentum 
            </h1>
            <h2>
                1. Review of classical angular momentum
            </h2>
            <h3>
                1.1 Orbital angular momentum
            </h3>
            <h3>
                1.2 Spin angular momentum
            </h3>
            <h2>
                2. Angular momentum in the quantum realm
            </h2>
            <h3>
                2.1 Orbital
            </h3>
            <h4>
                2.1.1 Orbital eigenvalue equation
            </h4>
            <h3>
                2.2 Spin
            </h3>
            <h4>
                2.2.1 Spin eigenvalue equation
            </h4>
<p>
The total angular momentum is given by 
            <div className={style.equationBox}> 
                 <div className={style.equation}><b>J</b>= <b>L</b> + <b> S </b> </div> 
                 <div className={style.equationNumber}> &#40;1&#41; </div>
</p>
            <h2>
                3. Quantum numbers
            </h2>
            <JlsEx />
            <Helpful />
        </>
    );
}

export default Jls;