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
            <p> 
                Your state education requirements...
            </p> 
            <br />
            <ul>
                <li>
                    <a href="https://www.cde.ca.gov/re/cc/">California</a>
                </li>
                <br />
                <li>
                    <a href="http://www.cde.state.co.us/standardsandinstruction">Colorado</a>
                </li>
                <br />
                <li>
                    <a href="https://cpalms.org">Florida</a> 
                </li>
                <br />
                <li> 
                    <a href="https://www.isbe.net/Pages/Standards-Courses.aspx">Illinois</a>
                </li>
                <br />
                <li>
                    <a href="https://www.doe.mass.edu/frameworks/default.html">Massachusetts</a>
                </li>
                <br />
                <li>
                    <a href="https://www.nysed.gov/curriculum-instruction">New York</a>
                </li>
                <br />
                <li> 
                    <a href="https://education.ohio.gov/Topics/Learning-in-Ohio/OLS-Graphic-Sections/Learning-Standards">Ohio</a>
                </li>
                <br />
                <li>
                    <a href="https://tea.texas.gov/academics/curriculum-standards">Texas</a>
                </li>
                <br /> 
                <li>
                    <a href="https://ospi.k12.wa.us/student-success/learning-standards-instructional-materials">Washington</a>
                </li>
            </ul>
            <br />
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