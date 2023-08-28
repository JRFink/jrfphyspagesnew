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
import { unstable_getServerSession } from "next-auth/next"; 
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default function Page() {
    const { data: session } = useSession() 

    if (session) {
        return (
            <>
                <h1>protected page</h1> 
                <p>you can view it</p>
            </>
        )
    }
    return <p>access denied</p>
}

export async function getServerSideProps( context: any ) {
    return {
        props: {
            session: await unstable_getServerSession(
                context.req, 
                context.res,
                authOptions
            ),
        },
    }
}


// const Gp1Vid = () => {
//     return (
//         <>
//             <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link>
//             <h1 className={style.centerText}>
//                 Gen phys 1 videos
//             </h1>
//             <UnitsVid />
//             <br />
//             <br />
//             <ConstantPosVid />
//             <br />
//             <br />
//             <AccelVid />
//             <br />
//             <br />
//             <Two3Vid />
//             <br />
//             <br />
//             <DeriveKinVid />
//             <br />
//             <br />
//             <NewtVid />
//             <br />
//             <br /> 
//             <PmvVid />
//             <br /> 
//             <br />
//             <EUKVid />
//             <br /> 
//             <br />
//             <WkeVid />
//             <br /> 
//             <br />
//             <RotVid />
//             <br /> 
//             <br />
//             <TrqVid />
//             <br /> 
//             <br /> 
//             <TaylorVid />

//         </>
//     );
// }

// export default Gp1Vid;