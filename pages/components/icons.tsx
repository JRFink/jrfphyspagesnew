import Image from 'next/image';
import vidicon from '@/public/images/vidicon.png';
import docicon from '@/public/images/docicon.png';
import pencilicon from '@/public/images/pencilicon.png';
import checkmark from '@/public/images/checkmark.png';
import profileav from '@/public/images/profileav.png';

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

export function Docicon () {
    return (
        <>
            <Image
            src={docicon}
            style={{
                width: '2%',
                height: 'auto'
            }}
            sizes="100vw"
            alt="Black document icon with black lines on it" 
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
                    height: 'auto'
                }}
                sizes="100vw"
                alt="Black pencil icon" 
            />
        </>
    );
}

export function Checkmark () {
    return (
        <>
            <Image 
                src={checkmark}
                style={{
                    width: '3%',
                    height: 'auto'
                }}
                sizes="100vw"
                alt="Black check mark" 
            />
        </>
    );
}

export function ProfileAv () {
    return (
        <>
            <Image 
                src={profileav} 
                style={{
                    width: '7%', 
                    height: 'auto'
                }}
                sizes="100vw"
                alt="a blue silhouette avatar"
            />
        </>
    );
}