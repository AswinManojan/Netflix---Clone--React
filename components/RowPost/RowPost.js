import React, { useEffect, useState } from "react";
import "./RowPost.css";
import YouTube from "react-youtube";
import axios from "../../axios";
import { API_KEY, imageURL } from "../constants/constants";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [videoID,setVideoID]= useState('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data)
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function handleMovie(id){
    // console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data)
        if (response.data.results.length!==0){
            setVideoID(response.data.results[0])
        }else{
            console.log("Empty Array")
        }
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageURL + obj.backdrop_path}`}
            onClick={()=>{
                handleMovie(obj.id)
            }}
          ></img>
        ))}
      </div>
      {videoID && <YouTube opts={opts} videoId={videoID.key}/>}
    </div>
  );
}

export default RowPost;
