import axios from 'axios';

const KEY = 'AIzaSyDRaJJ7VRP7MlRDD8iNxAHvM1q2EfDOPmI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});