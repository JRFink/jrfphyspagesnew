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
              As part of the business we are going to offer some consulting services. 
          </p> 
          <p> 
              Our main areas will be 
          <ul> 
              <li>Physics education</li>
              <li>Physics research</li>
              <li>Higher ed</li>
              <li>Education policy</li>
              <li>Government research</li>
          </ul>
          </p>
            <p>
              Find some stats at the <Link href="https://nces.ed.gov">National center for education statistics</Link>.
            </p>
      </>
  ); 
} 

export default Consult;
