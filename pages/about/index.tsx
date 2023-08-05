import Image from 'next/image';
import style from '@/styles/general.module.css';
import profpic from 'public/images/profpic.jpg';


const About = () => {
    return (
        <>
            <h1 className={style.centerText}>
                About
            </h1>
            <p className={style.centerText}>
                Jeff is a Colorado native.
                He went to the University of Dallas and studied philosophy 
                and then went to CU-Boulder and studied phys.      
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