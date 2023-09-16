import Link from 'next/link';
import style from '@/styles/general.module.css';

const Education = () => {

    return (
        <>
            <h1 className={style.centerText}>
                Education
            </h1>
            <br></br>
            <br></br>
            <div className={style.flexContainer}>
                
                <Link href="/education/classes" className={style.generalLink}>Classes</Link>
                <br />
                <Link href="/education/topics" className={style.generalLink}>Topics</Link>
                <br />   
                <Link href="/education/vid" className={style.generalLink}>Videos</Link>
                <br />   
<br /> 
<br />      
                <p> 
Your state education requirements...
</p> 
<ul>
<li>
<a href="https://www.cde.ca.gov/re/cc/">California</a></li>
<br />
<li>
<a href="http://www.cde.state.co.us/standardsandinstruction">Colorado</a></li>
<br />
<li>
<a href="https://cpalms.org">Florida</a> though you have to subscribe </li>
<br />
<li><a href="https://www.doe.mass.edu/frameworks/default.html">Massachusetts</a></li>
<br />
<li><a href="https://www.nysed.gov/curriculum-instruction">New York</a></li>
<br />
<li> 
<a href="https://education.ohio.gov/Topics/Learning-in-Ohio/OLS-Graphic-Sections/Learning-Standards">Ohio</a></li>
<br />
<li><a href="https://tea.texas.gov/academics/curriculum-standards">Texas</a></li>
<br /> 
<li>
<a href="https://ospi.k12.wa.us/student-success/learning-standards-instructional-materials">Washington</a></li>
</ul>
<br /> 
<br />         
 </div>

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