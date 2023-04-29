import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: {maxResults :'50'},
    headers: {
      'X-RapidAPI-Key': '7768c6b38cmsh0c32f3720a68678p1db3f8jsn18baa25c4c87',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }