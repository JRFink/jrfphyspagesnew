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
    </table>
            <br />
        </>
    );
}

export default Theor;
