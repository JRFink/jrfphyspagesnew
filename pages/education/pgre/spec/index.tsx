import style from '@/styles/general.module.css';

const Spc = () => { 
  return ( 
     <>
         <h1 className={style.centerText}>
           Special topics
         </h1>
         <p>The special topics section will test you on: 

<ol> 
   <li>Current research areas</li>
   <li>Nobel prizes</li>
   <li>...</li>
</ol>
     </>
  );
}

export default Spc;
