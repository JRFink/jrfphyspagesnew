import Image from 'next/image';
import vidicon from '@/public/images/vidicon.png';

const Vidicon = () => {
    return (
        <>
            <Image
            src={vidicon}
            style={{
                width: '3%',
                borderRadius: "20px",
                height: 'auto'
            }}
            sizes="100vw"
            alt="Black video icon" 
            />
        </>
    );
}

export default Vidicon;