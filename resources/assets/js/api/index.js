/**
 * Actually submits our HTTP message things. :thinking:
 */
import axios from 'axios';

export function submitQuestion(part, callback, errHandler){
    return axios.get('/api/questions', {
        params: {
            question: part,
        }
    }).then(callback)
      .catch(errHandler);
}