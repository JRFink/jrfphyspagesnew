import style from '@/styles/general.module.css';

const Em = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
           Electromagnetism
         </h1>
         <p>
            The E and M section of the gre will test you on:
 <ol>
  <li>Electric field</li>
  <li>Resistance, capacitance, inductance, voltage in a circuit</li>
  <li>Maxwell&#39;s equations</li>
  <li>...</li>
 </ol>
         </p>
     </>
  );
}

export default Em;
