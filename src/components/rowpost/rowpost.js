import React,{useEffect,useState} from "react";
import './rowpost.css'
import Youtube from 'react-youtube'
import {imgUrl,API_KEY} from '../../constents/constent'
import axios from "../../axios"

function Rowpost(props) {
    const [movies,setMovies]=useState([])
    const[urlId,seturlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            // alert('network alert')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }else{
                console.log('empty array');
            }
        })
      }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
       {movies.map((obj=>
         <img
         onClick={()=>handleMovie(obj.id)}
         className={props.isSmall? 'smallposter':'poster'}
           src={`${imgUrl+obj.backdrop_path}`}
           alt="poster"
         />
        ))}
      </div>
      { urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  );
}

export default Rowpost;
