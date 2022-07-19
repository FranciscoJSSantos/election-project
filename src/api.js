import axios from "axios";
import { useState, useEffect } from 'react';

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
});

export function useFetch(url){
  const [data, setData] = useState([]);


  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data)
      })
  }, []);

  return { data };

}




export default api;