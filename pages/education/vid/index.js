import { useState } from 'react';
import Link from 'next/link';
import style from '@/styles/general.module.css';
import UnitsVid from '@/public/videos/gp1/units';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
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
import FirstthermVid from '@/public/videos/therm/firstthermvid';
import IhVid from '@/public/videos/qm1/ihvid';
const stripe = require('stripe')(process.env.NEXT_PUBLIC_SKTEST);

const AllVid = () => {
    return (
        <>
            <br /> 
            <br />
            <Link href="/education" className={style.backtoLink}>Education</Link>
            <br />
            <h1 className={style.centerText}>
                Videos
            </h1>
            <br />
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
            <WkeVid />
            <br />
            <br /> 
            <EUKVid /> 
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
            <FirstthermVid /> 
            <br /> 
            <br />
            <IhVid />
            <br /> 
            <br />

        </>
    );
}

const VidFlow = () => {

    return (
        <>
            <AllVid />
        </>
    )
}

export default VidFlow;



