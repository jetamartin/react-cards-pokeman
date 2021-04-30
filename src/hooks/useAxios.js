import React, { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";

const useAxios = ({url}) => {
  const [state, setState ] = useState([]);
  const getApiData = async (url) => {
    debugger;
    const response = await axios.get(url);
    setState(cards => [...cards, { ...response.data, id: uuid() }])
  } 
  return [state, getApiData]
}

export default useAxios; 