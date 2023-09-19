import Link from 'next/link';
import style from '@/styles/general.module.css';

const Education = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Education
            </h1>
            <br></br>
            <div className={style.flexContainer}>
                
                <Link href="/education/classes" className={style.generalLink}>Classes</Link>
                <br />
                <Link href="/education/topics" className={style.generalLink}>Topics</Link>
                <br />   
                <Link href="/education/vid" className={style.generalLink}>Videos</Link>
                <br /> 
            <Link href="/education/ap/ap1alg" className={style.generalLink}>AP Physics 1 &#174;</Link>
      <br />
<a href="https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics" className={style.generalLink}>AP Physics C &#174;</a>
      <br />
<a href="https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/physics/" className={style.generalLink}>IB Physics</a>
      <br />            
</div>
            <br />
            <br />
            <p>
                Part of what we want to do is teach you things that you would learn in class. 
                For example, if you are taking physics in Colorado, what would you learn? We list some of the state requirements below. 
            </p>
            <p> 
                Mind you that these are high school requirements; college requirements vary. 
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
            <p> 
                Here are the College Board &#174; <a href="https://apstudents.collegeboard.org/courses/ap-physics-1-algebra-based">algebra based </a>
                and <a href="https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics">calc based</a> requirements.
            </p>
            <p>
                <a href="https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/physics/">IB physics</a>
            </p>
            <p>
                <a href="https://www.ipho-new.org/documentations/">Physics olympiad </a>problems
            </p>

            <br />         

            <h2 className={style.edHeaderSpace}>
                See what students are saying
            </h2>
            <h3 className={style.edHeaderSpace}>
                Reviews
            </h3>
            <br></br>
        </>
    );
}

export default Education;