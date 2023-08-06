import { useState } from 'react'
 
const UvEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
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
        <h3>Frames</h3>
        <p>3. Draw a 2 dimensional cartesian plane</p>
    </div>
  );
}

export default UvEx;