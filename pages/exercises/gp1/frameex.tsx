import { useState } from 'react';
import Exerciseheading from '@/pages/components/exerciseheading';
import Link from 'next/link';
 
const FrameEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <>
        <Exerciseheading />
        <h3>
          Frames
        </h3>
        <ol>
          <li>
            Draw a 2 dimensional cartesian plane.
          </li>
          <li>
            Draw a 3 dimensional cartesian plane.
          </li>
          <li>
            What frame are you in right now?
          </li>
          <li>
            Define your position relative to something else.
          </li>
        </ol>
        <h3>
          Standards and units
        </h3>
        <h3>
          Measurement
        </h3>
        <h3>
          Uncertainty and significant figures 
        </h3>
        <h3>
          Government standards
        </h3>
        <ol>
          <li>Familiarize yourself with <Link href="https://www.nist.gov">www.nist.gov</Link></li>
        </ol>
    </>
  );
}

export default FrameEx;