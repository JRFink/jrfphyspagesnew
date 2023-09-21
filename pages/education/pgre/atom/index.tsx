import style from '@/styles/general.module.css';

const Atom = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
            Atomic physics
         </h1>
         <p>
            The atomic physics section will test you on: 
  <ol>
    <li>Bohr model of the atom</li>
    <li>...</li>
  </ol>
         </p>
     </>
  );
}

export default Atom;
