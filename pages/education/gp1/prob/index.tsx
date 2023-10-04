import Link from 'next/link'; 
import style from '@/styles/general.module.css'; 
import Helpful from '@/pages/components/helpful/$gp1$prob';
  
 const Prob = () => { 
     return ( 
         <> 
            <br /> 
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link> 
            <br /> 
            <h1 className={style.centerText}> 
            Real world problems
            </h1> 
            <br />
            <p>
            These are some real world problems that you will be able to solve after going through the sections. 
            </p>
            <br />
            <p>
                Although all the background theory is nice, sometimes we just want to cut right to the chase and solve problems. 
                Here are some common problems that you may want to solve in physics:
                <ul>
                    <li>The motion of a planet around a star</li>
                    <li>The motion of an electron around a proton</li>
                    <li>The motion of a racecar around a track</li>
                    <li>The motion of an airplane in the sky</li>
                </ul>
            </p>
            <p>
                How do we solve these?
                <br />
                <br />
                Let&#39;s go through them one-by-one. 
            </p>
            <h3 className={style.h3num}>
                Motion of a planet around a star
            </h3>
            <p>
                Let&#39;s think about this. Stars are usually huge compared to the planets orbiting them. The distance 
                between the star and planet is also usually quite large. We know that there are four fundamental forces, gravity, 
                electric force, strong, and weak. The strong and weak only act at the level of nuclei, so these forces are not 
                influencing the star and planet too much. Let&#39;s compare the strength of the gravitational and electric force. 
            </p>
            <p>
                We know that the gravitational force is given by <b> F</b> &nbsp; = 
                G &nbsp; m<span><sub>1</sub></span>m<span><sub>2</sub></span>/ r<span><sup> 2</sup></span>, 
                and using the mass of our own sun and planet we have...
            </p>
            
               
            <br />
            <h2 className={style.h2SectionColor}>
            <Link href="/education/gp1/1dm" className={style.noUnder}>Motion in 1 dimension</Link> 
            </h2>
            <br />
            <br />
            <p>
                <ul>
                    <li>Solve for the position of an airplane as a function of time along the x axis</li>
                </ul>
            </p>
            <br />
            <Helpful />
         </> 
     ); 
 } 
  
 export default Prob;