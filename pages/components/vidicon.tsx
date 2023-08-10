import Image from 'next/image';
import vidicon from '@/public/images/vidicon.png';
import pencilicon from '@/public/images/pencilicon.png';

export default function Vidicon () {
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

export function Pencilicon () {
    return (
        <>
            <Image
            src={pencilicon}
            style={{
                width: '3%',
                borderRadius: "20px",
                height: 'auto'
            }}
            sizes="100vw"
            alt="Black pencil icon" 
            />
        </>
    );
}

