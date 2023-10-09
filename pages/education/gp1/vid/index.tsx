import Link from 'next/link';
import style from '@/styles/general.module.css';
import UnitsVid from '@/public/videos/gp1/units';
import AccelVid from '@/public/videos/gp1/accelvid';
import Two3Vid from '@/public/videos/gp1/two3';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import NewtVid from '@/public/videos/gp1/newt';
import PmvVid from '@/public/videos/gp1/pmv';
import WkeVid from '@/public/videos/gp1/wke';
import EUKVid from '@/public/videos/gp1/euk';
import RotVid from '@/public/videos/gp1/rm';
import TrqVid from '@/public/videos/gp1/trq';
import TaylorVid from '@/public/videos/gp1/taylor';
import Helpful from '@/pages/components/helpful/$gp1$vid';
const ip = require('ip');
const ipadr = ip.address();

const handleAnalytics = async () => { 
  
     const endpoint = '/api/helpful/$analytics' 
     const options = { 
       method: 'POST', 
       headers: { 
         'Content-Type': 'text/plain',  
       },  
       body: ipadr, 
     } 
     console.log(endpoint);
    await fetch(endpoint, options); 
}  

handleAnalytics();

const Gp1Vid = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
            <h1 className={style.centerText}>
                Gen phys 1 videos
            </h1>
            <UnitsVid />
            <br />
            <br />
            <p className={style.centerText}> 
                Buy the position and velocity video on our <Link href="/members">members</Link> page. 
            </p>
            <br />
            <br />
            <AccelVid />
            <br />
            <br />
            <Two3Vid />
            <br />
            <br />
            <DeriveKinVid />
            <br />
            <br />
            <NewtVid />
            <br />
            <br /> 
            <PmvVid />
            <br /> 
            <br />
            <EUKVid />
            <br /> 
            <br />
            <WkeVid />
            <br /> 
            <br />
            <RotVid />
            <br /> 
            <br />
            <TrqVid />
            <br /> 
            <br /> 
            <TaylorVid />
            <br /> 
            <br /> 
            <Helpful />
            <br />
        </>
    );
}

export default Gp1Vid;