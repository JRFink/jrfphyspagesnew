import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import per from '@/public/images/per.jpg';
import Helpful from '@/pages/components/helpful';

const PhysEd = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Physics education research
                </h1>
            </div>
            <p>
                Physics education research focuses on answering the question 
                <em> what are the most effective ways to teach, learn, and increase engagement in physics? </em> 
                The research process investigates
                different models in these areas - traditional blackboard instruction; question-driven <em>clicker</em> instruction;
                technology and hands-on tutorial instruction, all with their associated learning models;
                the process also investigates social engagement within physics and how to improve it. 
                Some of the best places to do this research are <a href="https://www.colorado.edu/per/">CU </a> 
                and the
                <a href="https://phys.washington.edu/research/research-groups/physics-education-group-peg"> University of Washington</a>. 
                Find some of the latest research <a href="https://journals.aps.org/prper/">here</a>.
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
                    src={per}
                    style={{
                        width: '60%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="The word physics spelled out in Scrabble (tm) tiles" 
                />
            </div>
            <h2>
                Locations
            </h2>
            <p>
                Some of the best places to do this research are... 
            </p>
            <h3>
                America
            </h3>
            <h3>
                Canada
            </h3>
            <h3>
                England
            </h3>

            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default PhysEd;