import style from '@/styles/general.module.css';

const Mcat = () => { 
  return ( 
     <> 
        <h1 className={style.centerText}>
             MCAT &#174; phys prep
        </h1>
<p>
     This page will help you prepare for the physics section of the <a href="https://students-residents.aamc.org/about-mcat-exam/about-mcat-exam">MCAT</a>.
</p>
     <p>   
     Find some prep material 
       <a href="https://www.mcat-prep.com/mcat-physics-equations-sheet/"> here</a>.
     </p>
     </>
  );  
}

export default Mcat; 
