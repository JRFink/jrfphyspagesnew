import Image from 'next/image';
import style from '@/styles/general.module.css';
import profpic from 'public/images/profpic.jpg';


const About = () => {
    return (
        <>
            <h1 className={style.centerText}>
                About
            </h1>
            
            <h2>
                Mission
            </h2>
                <p>
                    &nbsp; &nbsp; &nbsp; Our mission is to educate people about physics. 
                </p>
            <h2>
                Vision
            </h2>
                <p>
                    &nbsp; &nbsp; &nbsp; Our vision is to educate every person on the planet about physics. 
                    <br />
                    &nbsp; &nbsp; &nbsp; Whether it is teaching general physics to high school students, going through the quantum 
                    numbers with undergraduates, or explaining the fundamentals of quantum computing to the general public, 
                    we want to teach people how to understand the physics in our world.   
                </p>
<h2>
     Business structure
</h2>
   <p>
        The main aspects of our business are: 
        <ul>
             <li>Selling general physics classes for people to take</li>
             <li>Selling upper level physics classes for people to take</li>
             <li>Synthesizing current physics research into an easy-to-navigate <Link href="/research/news">news</Link> tab</li>
             <li>Selling <Link href="/consulting/reports">informational reports</Link> to higher learning institutions, governments, etc. about higher ed policy, physics topics, etc. </li>
        </ul>
   </p>
            <h2>
                History
            </h2>
                <p>
                    JRFink was founded in 2022. It has not taken out any money in funding, and it is starting from complete scratch. 
                    The business has not earned a dollar in revenue yet, but we&#39;re working on it. 
                </p>
                <p>
                    It was founded by Jeff. He went to the University of Dallas and CU-Boulder. He studied 
                    philosophy and physics at these schools. Now he lives in ny, and loves it.      
                </p>

            <br></br>
            <br></br>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={profpic}
                    style={{
                        width: '25%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
        </>
    );
}

export default About; 