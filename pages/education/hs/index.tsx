import Link from 'next/link';
import style from '@/styles/general.module.css';

const Hs = () => { 
  return (
    <>
    <br />
    <Link href="/education" className={style.backtoLink}>Education</Link>
    <br />
    <br /> 
    <h1 className={style.centerText}>
        High school
    </h1>
        <h2>
            Colorado
        </h2>
            <p>
                Chatfield high school
            </p>
    </>
  );
}

export default Hs;