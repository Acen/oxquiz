import axios from 'axios';

export function submitQuestion(part, callback){
    return axios.get('/api/questions', {
        params: {
            part: part,
        }
    }).then(callback);
}