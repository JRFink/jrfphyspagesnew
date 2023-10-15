import Link from 'next/link';
import style from '@/styles/general.module.css';

const Conn = () => { 
  return (
    <>
      <br />
      <Link href="/community" className={style.backtoLink}>Community</Link>
      <br />
      <br />
     <h1 className={style.centerText}>
        Posts 
     </h1>
      <p>
           Connect with others in physics.
      </p>
      <p>
           For example, here are some useful links:
          <ul>
            <li><Link href="https://www.aps.org/meetings/calendar.cfm">APS meetings</Link></li>
            <li><Link href="https://www.reddit.com/r/Physics/">Physics reddit</Link></li>
          </ul>
      </p>
    </>
  );
}

export default Conn;
