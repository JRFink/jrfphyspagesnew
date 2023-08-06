import { useState } from 'react';
import Link from 'next/link';
 
const UvEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <>
        <h2>
            Exercises
        </h2>
        <ol>
            <li>What are some things you know about physics?</li>
            <br></br>
            <li>How do we start doing physics?</li>
            <ol type="a">
              <li>How do we do it qualitatively?</li>
              <li>How do we do it quantitatively?</li>
            </ol>
        </ol>
        <h3>
          Frames
        </h3>
        <p>
          3. Draw a 2 dimensional cartesian plane
        </p>
        <p>
          4. Draw a 3 dimensional cartesian plane
        </p>
        <h3>
          Units
        </h3>
        <p>
          5. What is a standard?
        </p>
        <p>
          6. Familiarize yourself with <Link href="https://www.nist.gov">www.nist.gov</Link>
        </p>
    </>
  );
}

export default UvEx;