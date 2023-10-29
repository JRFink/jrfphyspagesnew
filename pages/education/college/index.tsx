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
        <h2>
            Texas
        </h2>
            <p>
                <Link href="https://www.udallas.edu/constantin/academics/programs/physics/index.php">University of Dallas</Link> 
                <ul>
                    <li>
                        1845 E Northgate Dr 
                        <br />
                        Irving, TX 75062
                    </li>
                    <li>
                        972 721 5000
                    </li>
                </ul>
            </p>
            
    </>
  );
}

export default College;