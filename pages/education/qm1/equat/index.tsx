import {useEffect} from 'react';
import Script from 'next/script';
import Link from 'next/link';
import style from '@/styles/general.module.css';

const Equat = () => {



    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
          window.MathJax.typeset()
        }
      },[])

    return (
        <>
            <Script
                    src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js"
                    strategy="lazyOnload"
            />
      
            <br /> 
            <Link href="/education/qm1" className={style.backtoLink}>Quantum</Link>
            <h1 className={style.centerText}>
                Equations for Quantum 1
            </h1>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>{" i ℏ \\(\\frac{\\partial{Ψ}}{\\partial{t}} = \\hat{H} Ψ \\)"}</div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#123; x, p &#125; = i &#8463; </div>
            </div>
            <br />
            <div className={style.equationBox}>
                    <div className={style.equation}>&#8710;x&#8710;p = &#8463; / 2 </div>
            </div>
<div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(1)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>   
             </div> 
 <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(2)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(3)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(4)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(5)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(6)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(7)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(8)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(9)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(10)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(11)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(12)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(13)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(14)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(15)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>   
               <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(16)"}</div>   
           </div>   
           <br />   
           <ul>   
               <li>Date of derivation - </li>   
               <br />   
               <li>Method of derivation - </li>   
               <br />   
               <li><span className={style.highlightText}>Experimental verification -</span> </li>   
               <br />   
               <li>Explanation - </li>   
           </ul>  
  <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(17)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(18)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(19)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(20)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(21)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(22)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(23)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(24)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(24)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(25)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(26)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(26)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(27)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(28)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(29)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>   
   <div className={style.equationBox}>    
                <div className={style.equation}>{"\\( \\)"} &nbsp; &nbsp; &nbsp; &nbsp; {"(30)"}</div>    
            </div>    
            <br />    
            <ul>    
                <li>Date of derivation - </li>    
                <br />    
                <li>Method of derivation - </li>    
                <br />    
                <li><span className={style.highlightText}>Experimental verification -</span> </li>    
                <br />    
                <li>Explanation - </li>    
            </ul>
        </>
    );
}

export default Equat