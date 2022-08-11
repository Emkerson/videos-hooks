import {useState,useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) =>{
    const[videos,setVideos]= useState([]);
    
    useEffect(() =>{
        serch(defaultSearchTerm);
    },[defaultSearchTerm]);

    const serch = async term =>{
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });

        setVideos(response.data.items);
        
    };

    //return{videos,serch};
    return[videos,serch];
    
};
export default useVideos;