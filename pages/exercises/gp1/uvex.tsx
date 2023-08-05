import { useState } from 'react'
 
const UvEx = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <h2>
            Exercises
        </h2>
        <ol>
            <li>Explain a unit in your own words</li>
            <br></br>
            <li>Can units change?</li>
        </ol>
    </div>
  );
}

export default UvEx;