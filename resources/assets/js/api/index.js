import axios from 'axios';

export function submitQuestion(part, callback, errHandler){
    return axios.get('/api/questions', {
        params: {
            part: part,
        }
    }).then(callback)
      .catch(errHandler);
}