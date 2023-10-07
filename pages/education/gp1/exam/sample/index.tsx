import style from '@/styles/general.module.css';

const Sample = () => { 
   return (
    <> 
      <h1 className={style.centerText}>
         Sample exam 
      </h1>
      <h2>
          Multiple choice 
      </h2>
         <p>
             <ul>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
                 <li>B</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>
                 <li>A</li>                 
                 <li>A</li>    
             </ul>
         </p>
      <br />
      <h2>
          Short response
      </h2>
       <p>
             <ul>
                 <li>Describe an inertial reference frame</li>
                 <li>Describe how calculus relates to motion in one dimension</li>
                 <li>Discuss a physical situation where we use both an idealized model and a realistic model for the situation. How much error is introduced when we use the idealized model?</li>
                 <li>A</li>                 
                 <li>A</li>
             </ul>
       </p> 
      <br />
      <h2>
         Long response
      </h2>
        <p> 
          <ul>
              <li>Relate...</li>
              <li>Explain...</li>
              <li>Connect...</li>
          </ul>
        </p>
   </>
  );
}
