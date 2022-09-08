import axios from 'axios'

export const baseUrl='https://bayut.p.rapidapi.com';

{/*headers: {
    'X-RapidAPI-Key': 'c14a9d869cmsh57b545c79b55fb8p11fff6jsnff0fa5902965',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }*/}

  export const fetchApi=async(url)=>{
    const {data}=await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'c14a9d869cmsh57b545c79b55fb8p11fff6jsnff0fa5902965',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
  }