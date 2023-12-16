import Link from 'next/link';
import style from '@/styles/general.module.css';
import Helpful from '@/pages/components/helpful/$ed';

const Education = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Education
            </h1>
            <br />
            <div className={style.flexContainer}>               
                <Link href="/education/gp1" className={style.generalLink}>General physics 1</Link>
                <br /> 
                <Link href="/education/gp2" className={style.generalLink}>General physics 2</Link>
                <br />    
                <Link href="/education/ap" className={style.generalLink}>AP physics &#169;</Link>
                <br />      
            </div>       
            <br />
            <br />
  {/*          <p>
                Part of what we want to do is teach you things that you would learn in class. 
                For example, if you are taking physics in Colorado, what would you learn? We list some of the state requirements below. 
            </p>
            <p> 
                                 Find your school, match requirements, get credit.  
            <br />
                 <input type="text" className={style.searchBox} placeholder="Find your school (testing..)"></input> 
            </p>
            <br />
            <div className={style.flexContainer}>
                <Link href="/education/hs" className={style.lightGreenLink}>Find your high school</Link>
                <br />
                <Link href="/education/college" className={style.lightGreenLink}>Find your college</Link>
            </div>
*/}
            <br /> 
            <br />         
            <h2 className={style.edHeaderSpace}>
                See what students are saying
            </h2>
            <h3 className={style.edHeaderSpace}>
                Reviews
            </h3>
            <br />
            <Helpful />
            <br />
        </>
    );
}

export default Education;