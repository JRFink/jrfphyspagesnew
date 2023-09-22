import style from '@/styles/general.module.css';
import Exerciseheading from '@/pages/components/exerciseheading';

const RmEx = () => {

 
    return (
      <>
        <Exerciseheading />
      
        <ol className={style.exerciseOl}>
          <li>A point particle orbits around an axis. What is its kinetic energy?</li>
        </ol>
      </>
    );
  }
  
  export default RmEx;