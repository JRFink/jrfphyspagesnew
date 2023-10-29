import Link from 'next/link';
import style from '@/styles/general.module.css';

const College = () => { 
  return (
    <>
    <br />
    <Link href="/education" className={style.backtoLink}>Education</Link>
    <br />
    <br /> 
    <h1 className={style.centerText}>
        Colleges 
    </h1>
        <h2>
            Colorado
        </h2>
            <p>
                <Link href="https://www.colorado.edu/physics/">University of Colorado - Boulder</Link> 
                <ul>
                    <li>
                        390 UCB 
                        <br />
                        Boulder, CO 80309 
                    </li>
                    <li>
                        303 492 6952
                        <br />
                        physics@colorado.edu
                    </li>
                </ul>
            </p>
            
    </>
  );
}

export default College;