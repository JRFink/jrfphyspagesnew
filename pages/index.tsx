import style from '../styles/general.module.css';
import Link from 'next/link';
import Image from 'next/image';
import nabla from '@/public/images/nabla.svg';

const indexPage = () => {
  return (
    <>
      <p className={style.centerText}>
        Hello, and welcome to jrfink.net! This site focuses on physics education and research.
      </p>
      <br></br>
      <p>
        Take a look around and explore. Above you will see a few tabs, which will take you to the education, 
        research, sign-up and login tabs. There is also a search feature. Working on that. <br></br> <br></br>

        The site isn&#39;t done yet, but it&#39;s a site to which you come to learn about physics. Eventually you will be able to take gen phys 1, 
        a full-on implementation of a gen phys 1 class. 
        <br></br><br></br> 
        You are also able to learn about the current research topics within physics. For example, what&#39;s all the hype with quantum computing? 
        Learn about it <Link href="/research/qis">here</Link>. 
        <br></br><br></br>
        You can learn about the different physics research areas and what schools and institutes are strong in each area. 
        For example, my alma mater <Link href="https://www.colorado.edu/physics/">CU</Link> is one of the best places for &#34;AMO&#34; research, 
        which studies how light interacts with matter.
      </p> 
      <h2> 
          Intro 
      </h2> 
      <p>  
          Physics is an awesome subject, but it&#39;s nonetheless difficult. There are two reasons you would start studying physics: 1) you took it in high school or college to meet a graduation requirement, or 2) because you heard about all the crazy stuff going on in physics like quantum and string theory, and you had to learn about it.  
      </p>
      <p>
          Overall, physics studies how things move. <em>Why does an apple fall from a tree? If it does, how long till it hits the ground? And what&#39;s the deal with light being a particle <Link href="https://theconversation.com/curious-kids-is-light-a-wave-or-a-particle-162514"> and a wave</Link>?</em> 
      </p>
      <h2> 
           Gen phys 
      </h2>
      <p> 
          Physics starts with gen phys 1, where you learn about motion, changes in motion, and how to use conservation laws to solve certain physics problems. You also learn about gravity and how to approximate it near earth&#39;s surface; you use that fact to solve a range of physics problems. 
      </p> 
      <p> 
          You end gen phys 1 with a study of waves and possibly some thermodynamics. Some stuff in gen phys 1 would definitely be true in any universe, lol.
      </p>
      <p> 
          Gen phys 2 is when you start getting into the structure of matter. You begin with the study of charge - specifically, electric. You learn about fields, forces, and charges in motion. You learn about putting these moving charges in a circuit and all the different ways you can wire things up. You go on to learn about the force from a charge in motion, the magnetic force. You learn about confusing things like induced emf, but when someone tells you this is a way electric cars work you have hope bc&#47; someone understands it. 
      </p>
      <p> 
           You build up to maxwell&#39;s equations and learn their definition. You start with the integral forms. You learn them as the capstone of EM theory. 
      </p>
      <h2> 
           Classical mechanics
      </h2>
      <p> 
           After this, then comes all the stuff from gen phys 1 at a higher level. We call this classical mechanics. 
      </p>
      <p>
           In gen phys 1, we learn about Newton&#39;s laws and could call this the Newtonian approach. In class mech, we revisit the classical regime but approach it differently; we solve problems using two new approaches, the <em>Lagrangian</em> and the <em>Hamiltonian</em>.  
      </p> 
      <p> 
           Instead of focusing on instantaneous changes and forces as a function, they focus on energy in a system and the fact that a system always takes a known path; then they obtain equations from that.
      </p> 
      <h2> 
           Electrcity and magnetism 
      </h2> 
      <p> 
           Next comes E and M, which is general physics 2 at a much higher level. This subject has a reputation for being difficult, not without justification. The math is probably the hardest part, but the math gives insight to what is happening physically.  
      </p>
      <p> 
           You&#39;ll cover charge, force, field, potentials, circuits, energy, conservation laws, electromagnetic waves, poynting vector, maxwell&#39;s equations, and relativity. It&#39;s a lot, but it gives you a deeper understanding of our world. 
      </p>
      <h2>
           Modern physics 
      </h2> 
      <p> 
           
      </p> 
      <div 
                style={{
                    display: "flex",
                    justifyContent: "left",
                }}
            >
                <Image
                    src={nabla}
                    style={{
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The black gradient symbol" 
                />
            </div>  
    </>
  );
}

export default indexPage;
