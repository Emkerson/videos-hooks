import axios from'axios';


const KEY = 'AIzaSyC-xM4w_ENM1nRrvjL5K_AfvM8N8yTRWqM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});