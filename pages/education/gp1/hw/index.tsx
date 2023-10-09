import Link from 'next/link'; 
import style from '@/styles/general.module.css';

const Hw = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Homework
            </h1>
            <p>
                Below you will find the homeworks to the class. 
                They will unlock once you complete each section.
            </p>
        </>
    );
}

export default Hw;