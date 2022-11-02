import Styles from './styles.module.css';
import { useState, useEffect } from "react";
import { Loading, Certificate, SearchBar } from '../../Components/Organisms';
import { Button } from '../../Components/Atoms';
import axios from 'axios';



const Studies = () => {
  const [certificates, setCertificates] = useState([])
  const [filterKeysWords, setfilterKeysWords] = useState("")

  const cardsData = () => {
    axios.get(`./Utils/certificates.json`)
    .then(res => {
      setCertificates(res.data)
      searchCertificate()
    }).catch(err => console.error(err))
  }

  const searchCertificate = () => {
    setfilterKeysWords(document.getElementsByName("searchBar")[0].value.toLowerCase().split(' ').join(''))
  }
    useEffect(() => {
      cardsData()
    }, [])
    const filterCertificates = certificates.filter((certificate) => {
      return certificate?.keyWords?.includes(filterKeysWords) ? certificate : null
    })
    
  return certificates.length > 0 ?(
    <div className="App">
      <SearchBar onChange={() => searchCertificate()}/>
      {certificates.length && <Certificate certificates={filterCertificates}/>}
    </div>
  ): (
    <Loading/>
  )
 }

export default Studies ;