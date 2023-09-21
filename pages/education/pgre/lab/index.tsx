import style from '@/styles/general.module.css';

const Lab = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
           Laboratory methods
         </h1>
         <p>
           The laboratory section of the gre will test you on: 
         <ol> 
              <li>Measurement</li>
              <li>Uncertainty</li>
              <li>...</li>
         </ol>
         </p>
     </>
  );
}

export default Lab;
