import Link from 'next/link';
import style from '@/styles/general.module.css';
import Image from 'next/image';
import nuc from '@/public/images/nuc.svg';
import Helpful from '@/pages/components/helpful';

const Nuclear = () => {
    return (
        <>
            <Link href="/research" className={style.backtoLink}>Research</Link><br></br>
            <br></br>
            <div className={style.centerText}>
                <h1>
                    Nuclear physics
                </h1>
            </div>
            <p>
                Nuclear physics research centers on two areas - nuclear structure and nuclear matter. 
                Nuclear structure focuses on protons, neutrons, ionized atoms, and the particles that make them up 
                - quarks and gluons.  
                Nuclear matter focuses on different compositions of nuclei - the quark gluon plasma (created in high-energy collisions), 
                neutron stars, and nucleon gases, to name a few. 
                You can find some of the latest research <a href="https://journals.aps.org/prc/">here</a>.  
                The division in the <a href="https://science.osti.gov/np/Research">Department of Energy</a> will also keep you busy. 
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
                    src={nuc}
                    style={{
                        width: '50%',
                        borderRadius: "20px",
                        height: 'auto'
                    }}
                    sizes="100vw"
                    alt="An atom with three electrons" 
                />
            </div>
<h2> 
      Nuclear theory crash course 
</h2>
<p> 
    Nuclear theory starts with the number of protons and neutrons in a nucleus. This is the basis of the elements.
</p>
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
                China
            </h3>
            <h3>
                England
            </h3>
            <h3>
                Germany
            </h3>
            <h3>
                India
            </h3>
            <h3>
                Japan
            </h3>
            <h3>
                Russia
            </h3>
            <br></br>
            <br></br>
            <Helpful />
        </>
    );
}

export default Nuclear;