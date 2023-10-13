import Link from 'next/link'; 
import Image from 'next/image';
import style from '@/styles/general.module.css';

const Theor = () => {
    return (
        <>
            <br />
            <Link href="/research/cm" className={style.backtoLink}>Condensed matter</Link>
            <br />
            <br />
            <h1 className={style.centerText}>
                Condensed matter theory
            </h1>
            <br />
            <p>
                Below you will find some theories for condensed matter. 
            </p>
    <table>
      <tr>
          <th>Element</th>
          <th>Hamiltonian</th>
          <th>Schrodinger Eq</th>
      </tr>
      <tr>
          <td>Hydrogen</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Helium</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Lithium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Beryllium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Boron</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Carbon</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Nitrogen</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Oxygen</td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td>Flourine</td>
          <td></td>
          <td></td>
      </tr> 
      <tr>
          <td>Neon</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Sodium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Magnesium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Aluminum</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Silicon</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Phosphorus</td>
          <td></td>
          <td></td>
      </tr>  
      <tr>
          <td>Sulfur</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Chlorine</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Argon</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Potassium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Calcium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Scandium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Titanium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Vamadium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Chromium</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Manganese</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td>Iron</td>
          <td></td>
          <td></td>
      </tr>
   </table>
            <br />
        </>
    );
}

export default Theor;
