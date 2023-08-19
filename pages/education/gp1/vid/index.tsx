import style from '@/styles/general.module.css';
import UnitsVid from '@/public/videos/gp1/units';
import ConstantPosVid from '@/public/videos/gp1/constantpos';
import AccelVid from '@/public/videos/gp1/accelvid';
import Two3Vid from '@/public/videos/gp1/two3';
import DeriveKinVid from '@/public/videos/gp1/derivekin';
import NewtVid from '@/public/videos/gp1/newt';
import PmvVid from '@/public/videos/gp1/pmv';
import EUKVid from '@/public/videos/gp1/euk';
import RotVid from '@/public/videos/gp1/rm';
import WkeVid from '@/public/videos/gp1/wke';
import TaylorVid from '@/public/videos/gp1/taylor';

const Gp1Vid = () => {
    return (
        <>
            <h1 className={style.centerText}>
                Gen phys 1 videos - bingeworthy
            </h1>
            <UnitsVid />
            <br /> 
            <br />
            <br />
            <ConstantPosVid />
            <br /> 
            <br />
            <br />
            <AccelVid />
            <br /> 
            <br />
            <br />
            <Two3Vid />
            <br /> 
            <br />
            <br />
            <DeriveKinVid />
            <br /> 
            <br />
            <br />
            <NewtVid />
            <br /> 
            <br />
            <br /> 
            <PmvVid />
            <br /> 
            <br />
            <br /> 
            <EUKVid />
            <br /> 
            <br />
            <br /> 
            <RotVid />
            <br /> 
            <br />
            <br /> 
            <WkeVid />
            <br /> 
            <br />
            <br /> 
            <TaylorVid />

        </>
    );
}

export default Gp1Vid;