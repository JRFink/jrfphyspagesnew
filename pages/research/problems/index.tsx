import Link from 'next/link';  
  import style from '@/styles/general.module.css';  
  
  const Prob = () => {   
    return (  
      <>  
       <br />
        <Link href="/research/problems" className={style.backtoLink}>Research</Link>
        <br /> 
        <br />
        <h1 className={style.centerText}>  
          Problems 
       </h1>  
        <p>  
             Here are some unsolved problems in physics -    
        </p>  
        <p> 
            <ul> 
                <li>Tangential velocity of matter around galaxies - dark matter?</li> 
                <li>Connection between gravitational and the electric force</li> 
  
                <li>Gravity in the standard model</li> 
                <li>Interpretation of quantum mechanics</li> 
            </ul> 
        </p> 
      </>  
    );  
  }  
  
  export default Prob;
