import { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../api/axios'
import requests from '../api/requests'

const Banner = () => {

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    const response = await axios.get(requests.fetchNowPlaying);

    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: {
          append_to_response: "videos"
        }
      })
      setMovie(movieDetail);
  }

  return (
    <div>Banner</div>
  )
}

export default Banner
