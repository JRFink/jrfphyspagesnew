import Image from 'next/image';
import Link from 'next/link';
import style from '@/styles/general.module.css';
import profpic from 'public/images/profpic.jpg';
import profcc from 'public/images/profcc.jpg';
import alps from 'public/images/IMG_5588.jpg';


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
                    &nbsp; &nbsp; &nbsp; Whether it is teaching general physics to high school students, going through the quantum 
                    numbers with undergraduates, or explaining the fundamentals of quantum computing to the general public, 
                    we want to help others learn about physics.   
                </p>
            <h2>
                Business structure
            </h2>
            <p>
                The bread and butter will be selling general physics classes. We will also:
                <ul>
                  <li>Sell upper level physics classes</li>
<br />
                    <li>Synthesize current research into an easy-to-navigate <Link href="/research/news">news</Link> tab</li>
<br />
  <li> 
Putting out a weekly periodical of interesting research findings 
</li>
                    {/* <li>Selling <Link href="/consulting/reports">informational reports</Link> to higher learning institutions, governments, etc. about higher ed policy, physics, etc. </li> */}
                </ul>
            </p>
            <h2>
                History
            </h2>
                <p>
                    JRFink was founded in 2022. It has not taken out any money in funding, and it is starting from complete scratch. 
                    The business has not earned a dollar in revenue yet&#59; we&#39;re working on it. 
                </p>
                <p>
                    It was founded by Jeff. He is a Colorado native. He went to the University of Dallas and studied philosophy and then went to CU-Boulder and studied physics. Now he lives in ny. He loves running, music, and sun-dried tomato chicken pasta.     
                </p>
            <br />
            <br />
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
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
            <br />
            <br />
            <br />
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                
                <Image
                    src={profcc}
                    style={{
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="Guy with a blue shirt with trees in the background" 
                />
            </div>
            <br />
            <br />
            <br />
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                <Image
                    src={alps}
                    style={{
                        width: '40%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="two guys on a mountain in the alps" 
                />
            </div>
            <br />
            <p className={style.small}>
                My friend John and I in the alps 2015&#33;
            </p>  
            <br />
        </>
    );
}

export default About; 