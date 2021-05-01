import React, { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";

const useAxios = (baseUrl, paramsRequired) => {
  const [state, setState ] = useState([]);

  const getApiData = async (e) => {
    let url = baseUrl;
    // If params required to complete url add them here
    if (paramsRequired) {
      url = baseUrl +`${e}/`
    }
    // Retrieve data from API 
    const response = await axios.get(url);
    setState(cards => [...cards, { ...response.data, id: uuid() }])
  } 
  return [state, getApiData]
}


export default useAxios; 

