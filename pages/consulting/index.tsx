import Link from 'next/link'
import style from '@/styles/general.module.css';

const Consult = () => { 
  return ( 
      <> 
        <h1 className={style.centerText}>
           Consulting 
        </h1>
          <p>
            Welcome to the consulting page
          </p>
          <p> 
              As part of the business, we are going to offer some consulting services. 
          </p> 
          <p> 
              Our main areas will be 
          <ul> 
              <li>Physics education</li>
              <li>Physics research</li>
              <li>Higher ed</li>
              <li>Education policy</li>
              <li>Government res</li>
          </ul>
          </p>
          <p>
            Find some <span className={style.highlightTextBlue}>sample reports</span> <Link href="/consulting/reports">here</Link>
          </p>
            <p>
              Find some stats at the <Link href="https://nces.ed.gov">National center for education statistics </Link> 
              and the <Link href="https://ies.ed.gov">Institute of education sciences</Link>.
            </p>
            <p>The US department of education has a <Link href="/pdf/usedbudget24.pdf">budget</Link> of &#36;90 Billion for 2024.</p>
            <p>
              Some sample research... 
            </p>
            <p>
              There are 
                <ul>
                  <li>12 in-person colleges in Rhode island that offer Bachelors+ degrees</li>
                  <li>26 senior members of the department of education, with their roles found <Link href="https://www2.ed.gov/news/staff/bios/index.html">here</Link></li>
                  <li>Mexico&#39;s department of education found <Link href="https://www.gob.mx/sep">here</Link></li>
                </ul>
            </p>
      </>
  ); 
} 

export default Consult;
