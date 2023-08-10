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
        </>
    );
}

export default Accred;