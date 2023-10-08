import Link from 'next/link';
import style from '@/styles/general.module.css';

const Id = () => { 
  return (
    <>
        <br />
        <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
        <br />
        <h1 className={style.centerText}>
          Idealized models
        </h1>
          <p>
            Models are useful because they help us apply the same principles to a range of phenomena.
          </p>
    </>
    );
} 
export default Id;
