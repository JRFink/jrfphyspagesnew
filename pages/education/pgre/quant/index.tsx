import style from '@/styles/general.module.css';

const Quant = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
           Quantum mechanics
         </h1>
         <p> 
            The quantum mechanics section of the gre will test you on: 
<ol> 
  <li>Schrodinger equation theory</li>
  <li>Schrodinger equation for common systems</li>
  <li>uncertainty principle</li>
  <li>angular momentum</li>
  <li>identical particles</li>
  <li>perturbation theory</li>
</ol>
         </p>
     </>
  );
}

export default Quant;
