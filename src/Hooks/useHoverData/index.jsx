import axios from 'axios';
import { useState, useEffect } from "react";


const useHoverData = (linkfetch = "") => {
  const [fetchData, setFetchData] = useState([])

  const fetch = () => {
    axios.get(linkfetch)
      .then(res => {
        setFetchData(res.data)
      }).catch(err => console.error(err))
  }

  useEffect(() => {
    fetch()
  }, [])


  return {
    fetchData,
    linkfetch
  };
};

export default useHoverData