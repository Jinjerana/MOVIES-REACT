import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  //   useEffect(() => {

  // const BASE_URL = 'https://api.themoviedb.org/3/movie/11?api_key=30f74636e08937577c41f8000490a2f5';

  // const axios = require('axios');

  async function getUser() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/11?api_key=30f74636e08937577c41f8000490a2f5'
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  //   }, []);
  return <div>Home</div>;
};

export default Home;
