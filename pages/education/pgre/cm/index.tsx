import style from '@/styles/general.module.css';

const Cm = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
           Classical Mechanics
         </h1>
         <p>
             The classical mechanics section will test you on your knowledge of: 
<ol> 
  <li>the relation between force and acceleration</li>
  <li>friction</li>
  <li>lagrangians of common systems</li>
  <li>hamiltonians of common systems</li>
</ol>
         </p>
     </>
  );
}

export default Cm;
