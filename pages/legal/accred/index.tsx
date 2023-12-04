import Link from 'next/link';
import style from '@/styles/general.module.css';

const Accred = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Accredidations
            </h1>
            <p>
                The <a href="https://www.hlcommission.org/">Higher Learning Commission </a> 
                accredits most colleges and universities in the united states.
            </p>
            <p>
                A list of the main seven federally recognized accrediting agencies can be found <a href="https://www.chea.org/regional-accrediting-organizations">here</a>. 
            </p>
            <p>
                Right now we are not accredited &#58;&#41;.
            </p>
        </>
    );
}

export default Accred;