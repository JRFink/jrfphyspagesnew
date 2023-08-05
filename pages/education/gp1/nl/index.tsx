import Link from 'next/link';
import NewtVid from '@/public/videos/gp1/newt';
import style from '@/styles/general.module.css';
import NlEx from '@/pages/exercises/gp1/nlex';
import Helpful from '@/pages/components/helpful';

const NewtLaws = () => {
    return (
        <>
            <Link href="/education/gp1" className={style.backtoLink}>Gen phys 1</Link><br></br>
            <br></br>
            <h1 className={style.centerText}>
                Newton&apos;s Laws of Motion
            </h1>
            <br></br>
            <h2>
                Newton&apos;s first law  
            </h2>
            <p>
                Newton&apos;s first law states that an object in motion will remain in motion unless acted on by another; 
                it also states that an object at rest will remain at rest unless acted on by another.
            </p>
            <h2>
                Newton&apos;s second law
            </h2>
            <p>
                ... math implementation ... 
            </p>
            <h2>
                Newton&apos;s third law
            </h2>
            <p>
            Newton&apos;s third law states that when object A exerts a force on object B then 
            object B exerts a force on object A of the same strength but directionally opposite to the force that A exerts on B. 
            </p>
            <NewtVid />
            <br></br>
            <br></br>
            <NlEx />
            <br></br>
            <Helpful />
        </>
    );
}

export default NewtLaws;