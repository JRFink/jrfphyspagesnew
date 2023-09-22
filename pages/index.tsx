import style from '../styles/general.module.css';
import Link from 'next/link';
import Image from 'next/image';
import indiangirl from '@/public/images/indiangirl.jpg'; 
import asiangirl from '@/public/images/asiangirl.jpg';
import redhair from '@/public/images/redhair.jpg'; 
import publicgroup from '@/public/images/publicgroup.jpg'; 
import water from '@/public/images/water.jpg';
import symbols from '@/public/images/symbols.jpg';
import violin from '@/public/images/violin.jpg';
import quantspiral from
'@/public/images/quantspiral.jpg';
import classapple from '@/public/images/classapple.jpg';  
import emcircuits from '@/public/images/emcircuits.jpg';
import surface from '@/public/images/surface.jpg';
import galaxyhome from '@/public/images/galaxyhome.jpg';
import nabla from '@/public/images/nabla.svg';
 

const indexPage = () => {
  return (
    <>
      <p className={style.centerText}>
        Hello, and welcome to jrfink.net! 
        <br />
        <br />
        This site is under <span className={style.highlightText}>active construction ⚠️</span>.
      </p>
      <br />
      <p> 
         <b>
             Mission statement: 
         </b>
      </p>
      <p className={style.centerText}>
         Our mission is to educate people about physics.
      </p>
      <br />
      <p> 
         Nike &#174; sells shoes, Coca-Cola &#174; sells a drink, and Wells Fargo &#174; sells checking accounts&#59; we sell physics education.
      </p>
      <h2>
          How does it work? 
      </h2> 
      <h3>
          If you&#39;re in high school&#46;&#46;&#46;
      </h3>
      <p> 
          If you&#39;re in high school and taking physics, head over to our <Link href="/education/gp1">Gen phys 1</Link> page to learn about the topics you&#39;ll cover in class.
</p>
<p>
     You can find your state&#39;s education requirements <Link href="/education">here</Link>
</p>
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={indiangirl} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="Girl in blue outfit sitting at a desk"  
                 /> 
             </div>
<br /> 
<br /> 
      <h3> 
          If you&#39;re in college&#46;&#46;&#46; 
      </h3>
<p> 
     The average cost of a 3 credit college class in the United states is about &#36;1500, and that is on the low end.
</p>
<p> 
Instead, you can come here and learn all the physics you want for &#36;5 per month. 
</p>
      <p>
          If you are in college and taking gen phys 1, either calculus or algebra based, head on over to our <Link href="/education/gp1">Gen phys 1</Link> page. We&#39;ll derive the kinematic equations from algebra and calc. We&#39;ll also give you a differential equations crash-course, so you can understand the different contexts of newton&#39;s second law.  
      </p>
      <p>
          We&#39;ll also cover taylor expansions.  
      </p>
<br /> 
<br /> 
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={asiangirl} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="girl sitting on the floor with books everywhere"  
                 /> 
             </div>
<br /> 
<br />
      <h3> 
          If you&#39;re a physics researcher&#46;&#46;&#46;
      </h3>
      <p> 
          If you&#39;re a physics researcher and need access to the latest news in a certain research area, head on over to our <Link href="/research">research page</Link>. Here you will find links to the latest research papers in each area. 
      </p>
<br /> 
<br /> 
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={redhair} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a girl talking to another in front of a white board"  
                 /> 
             </div>
<br /> 
<br />
      <h3> 
          If your company is getting into quantum computing&#46;&#46;&#46;
      </h3>
      <p> 
          If your company is getting into quantum computing, head on over to our <Link href="/research/qis">quantum computing page</Link>. You will be able to learn about 
          the basics of quantum computing, how quantum computers are built, and the major players in the space. 
      </p>
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={quantspiral} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a red and white spiral nanotube"  
                 /> 
             </div>
<br /> 
<br /> 
      <h3> 
          If you&#39;re a member of the general public&#46;&#46;&#46;
      </h3> 
<p> 
          If you&#39;re a member of the general public, you can find useful things all over the site. For example, let&#39;s say you work in computer programming and a client wants to experiment with quantum computing. You don&#39;t have to be a quantum expert, but you probably want to know some of the math. You can head on over to our <Link href="/education/qm1/op">math background</Link> section to get an overview of the math used in quantum. 
      </p>
<br /> 
<br />
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={publicgroup} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a group of people with an instructor at the front"  
                 /> 
             </div>
<br /> 
<br /> 

      <h2> 
           We&#39;d love your feedback
      </h2> 
      <p>
           We&#39;d love your <Link href="/contact">feedback</Link> on the site. How do you like it? As a thank you, we are giving the first 20 people who give feedback on the site 2 months free once the subscription feature launches. 
      </p>
      <br /> 
      <p className={style.centerText}>
          &#46; &nbsp; &#46; &nbsp; &#46; &nbsp; 
      </p>
      <br />  
      <p>
        Take a look around and explore. Above you will see a few tabs, which will take you to the education, 
        research, sign-up and login tabs. There is also a search feature. Working on that. <br></br> <br></br>

<br /> 
<br />
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={water} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a water droplet"  
                 /> 
             </div>
<br /> 
<br /> 

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
      <h2 id="intro"> 
          Intro 
      </h2> 
      <p>  
          Physics is a cool subject, but it&#39;s difficult. There are two reasons you would start to study physics: 1&#41; you took it in high school or college to meet a graduation requirement, or 2&#41; because you heard about all the crazy stuff going on in physics like quantum and string theory, and you had to learn about it.  
      </p>
      <p>
          Overall, physics studies how things move. <em>Why does an apple fall from a tree? If it does, how long till it hits the ground? And what&#39;s the deal with light being a particle <Link href="https://theconversation.com/curious-kids-is-light-a-wave-or-a-particle-162514"> and a wave</Link>?</em> 
      </p>
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={symbols} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a green chalkboard with mathematical symbols"  
                 /> 
             </div>
<br /> 
<br /> 
      <h2> 
<Link href="/education/gp1">Gen phys</Link>
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
<br /> 
<br />
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={classapple} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a stack of books and an apple on a desk"  
                 /> 
             </div>
<br /> 
<br />
      <h2 id="classical"> 
<Link href="/education/cm1">
           Classical mechanics
</Link> 
      </h2>
      <p> 
           After this, then comes all the stuff from gen phys 1 at a higher level. We call this classical mechanics. 
      </p>
      <p>
           In gen phys 1, we learn about Newton&#39;s laws and could call this the Newtonian approach. In class mech, we revisit the classical regime but approach it differently; we solve problems using two new approaches, the <em>Lagrangian</em> and the <em>Hamiltonian</em>.  
      </p> 
      <p> 
           Instead of focusing on instantaneous changes and forces as a function, these approaches focus on the energy in a system and the fact that a system always takes a known path; then they obtain equations from that.
      </p> 
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={violin} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="top part of a violin"  
                 /> 
             </div>
<br /> 
<br /> 
      <h2> 
<Link href="/education/em1">
           Electricity and magnetism 
</Link>
      </h2> 
      <p> 
           Next comes E and M, which is general physics 2 at a much higher level. This subject has a reputation for being difficult, not without justification. The math is probably the hardest part, though the math gives insight into what is happening physically.  
      </p>
      <p> 
           You&#39;ll cover charge, force, field, potentials, circuits, energy, conservation laws, electromagnetic waves, poynting vector, maxwell&#39;s equations, and relativity. It&#39;s a lot, but it gives you a deeper understanding of our world. 
      </p>
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={emcircuits} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="many wires plugging into a circuit board"  
                 /> 
             </div>
<br /> 
<br /> 
      <h2>
  <Link href="/education/qm1">
           Modern physics 
  </Link>
      </h2> 
      <p> 
           Modern physics is when you start to learn about relativity and quantum mechanics. 
           We divide relativity into special and general, and special is the one you&#39;ll cover first. 
           You usually don&#39;t cover general till grad level classes. 
      </p> 
      <p>
           Special relativity covers position, velocity, time, momentum, and energy between reference frames which are moving relative to one another. 
           S.r. addresses these topics when things are moving close to the speed of light. 
      </p>
      <p>
           Quantum mechanics studies atoms and some subatomic particles. You learn about how to characterize these objects and when you 
           can use classical analogies and when you cannot. When you cannot, you need the full machinery of quantum such as wave functions, 
           operators, angular momentum theories, and lots of integrals. 
      </p>
<br /> 
<br />
            <div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={surface} 
                     style={{ 
                         width: '70%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a gray smooth curving surface"  
                 /> 
             </div>
<br /> 
<br /> 
      <p>
           After quantum comes quantum field theory, which studies just subatomic particles. It&#39;s what we call the physics of the <Link href="/research/particle">standard model</Link>.
           The standard model is a table of ~ 17 particles that make up the basis of our world. It&#39;s not that simple, though it&#39;s a start. 
      </p>
      <p>
           The thing that is deeper than qft is string theory. String theory aims to describe the fundamental particles as vibrations, 
           where different vibrations correspond to different particles. The size of a string is so small that we have not had any experimental detection of 
           one yet. As an exercise, look up the size of a string and then compare the entire size of the universe to what a string would be. Pretty small.
      </p>
      <p>
           Going from the small to the large would be cosmology. Cosmology aims to describe the universe macroscopically; 
        <em> how does it evole? how did it begin? where is it going?</em>
<br /> 
<br />
<div  
                 style={{ 
                     display: "flex", 
                     justifyContent: "center", 
                 }} 
             > 
                 <Image 
                     src={galaxyhome} 
                     style={{ 
                         width: '80%', 
                         borderRadius: "20px", 
                         height: 'auto' 
                     }} 
                     sizes="100vw" 
                     alt="a blue and purple galaxy"  
                 /> 
             </div>
<br /> 
<br />
      </p>
      <h2>
           Summary
      </h2>
      <p>
           Physics aims to make the world understandable; it does this by establishing reference frames, specifying positions and motion, 
           changes to these, and the reasons for them. 
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
