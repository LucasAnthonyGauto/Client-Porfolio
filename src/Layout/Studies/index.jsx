import Styles from './styles.module.css';
import { useState, useEffect } from "react";
import { Loading, Certificate } from '../../Components/Organisms';
import { Button } from '../../Components/Atoms';

const Studies = () => {
  const [certificates, setCertificates] = useState([])
  const [filtros, setFiltros] = useState(`html`)

  function CardsData () {
    fetch(`./Utils/certificates.json`)
      .then(response => response.json())
      .then(datos => {
        setCertificates(datos)
      })
    }
    useEffect(() => {
      CardsData()
    }, [])
    const filtro = certificates.filter(iten => {
      if (iten.bootcamp === "Educacion IT" ) {
        return true
      } {
        return false;
      }
    });
    console.log(filtro);
    console.log();
    const cambio = () => {
      setFiltros(certificates)
    }

  return certificates.length > 0 ?(
    <div className="App">
      {certificates.length && <Certificate certificates={certificates}/>}
      <Button btnClick={() => {cambio()}}/>
    </div>
  ): (
    <Loading/>
  )
 }

export default Studies ;