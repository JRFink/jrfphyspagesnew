import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 

const StateStd = () => { 
    return ( 
       <>
          <h1 className={style.centerText}>
              Science standards
          </h1>
          <p>
            Here are some science standards for different states.
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
       </>
    );
}

export default StateStd;